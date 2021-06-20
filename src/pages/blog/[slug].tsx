

import { GetStaticProps } from "next"
import React from "react"
import { getMDXComponent } from 'mdx-bundler/client';
import Layout from '@/layouts/index'
import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { Post } from "@/types/post";


export const getStaticPaths = () => {
  const posts = getAllPosts()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

  return {
    paths: paths,
    // Return 404 page if path is not returned by getStaticPaths
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string
  const post = await getPostBySlug(slug)

  return { props: post }
}


export default function PostPage({ meta, code }: Post) {

  console.log([meta, code])

  // This is a bit weird, but this is how mdx-bundler recommends it.
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  

  return (
    <Layout frontMatter={meta}>
      <Component />
    </Layout>
     
  )
}