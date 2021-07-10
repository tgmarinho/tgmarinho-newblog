// @ts-nocheck
const algoliasearch = require('algoliasearch')
const fs = require('fs')
const glob = require('glob')
const matter = require('gray-matter')
const path = require('path')

export default async function handler(req, res) {
  const SECRET = process.env.NEXT_ALGOLIA_POPULATE_PASSWD
  const { secret } = req.query

  try {
    if (SECRET === secret) {
      await PupuleAlgolia()
      return res.status(200).json({ success: 'ok - finished' })
    } else {
      throw new Error('Go away, sho sho sho!')
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllPosts = () => {
  const ROOT_PATH = process.cwd()
  console.log(ROOT_PATH)
  const POSTS_PATH = path.join(ROOT_PATH, 'src', 'pages', 'posts')

  const PATH = path.join(POSTS_PATH)

  // Get all file paths in the posts folder (that end with .mdx)
  const paths = glob.sync(`${PATH}/**/*.mdx`)

  return (
    paths
      .map((filePath) => {
        // Get the content of the file
        const source = fs.readFileSync(path.join(filePath), 'utf8')

        // Get the file name without .mdx
        const slug = path.basename(filePath).replace('.mdx', '')
        // Use gray-matter to extract the post meta from post content
        const data = matter(source).data

        return {
          ...data,
          slug,
        }
      })

      // filter post by category if specified
      .filter((post) => post?.status !== 'preview')

      // Sort posts by published date
      .sort(
        (a, b) =>
          Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
      )
  )
}

async function PupuleAlgolia() {
  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
  const adminApiKey = process.env.ALGOLIA_ADMIN_KEY
  const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME

  const client = algoliasearch(appId, adminApiKey)
  const index = client.initIndex(indexName)

  const allPosts = getAllPosts()

  const objects = allPosts.map(({ title, description, category, slug }) => ({
    objectID: slug,
    title,
    description,
    category,
  }))

  await index
    .saveObjects(objects)
    .then(({ objectIDs }) => {
      console.log('log ID: ', objectIDs)
    })
    .catch((err) => {
      console.log('Ops! Error: ', err)
    })
    .finally(() => console.log('finished...'))
}
