// @ts-nocheck
/* eslint-disable */
import Head from 'next/head'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'
import { getAllPosts } from '@/lib/mdx'
import { Search } from '@/components/Search'
import { GetStaticProps } from 'next'
import { PostMeta } from '@/types/post'
import { useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router'
import { Posts } from '@/components/Posts'
import { Title } from '@/components/Title'
import { Header } from '@/components/Header'
import { Post } from '@/components/Post'

import { Divider } from '@/components/Divider'
import SEO from '@/components/SEO'
import Navigation from '@/components/Navigation'

export const getStaticProps: GetStaticProps<PostMeta[]> = async () => {
  const posts = getAllPosts('post')

  return { props: { posts } }
}

export default function HomePage({ posts }) {
  posts.sort((a, b) =>
    new Date(a.publishedAt) < new Date(b.publishedAt) ? 1 : -1
  )

  const router = useRouter()

  return (
    <>
      <Head>
        <title>@tgmarinho</title>
      </Head>
      <div tw="py-14">

        <Header />
        <SEO />
        {/* <div onClick={() => router.push('search')}>
          <Search />
        </div> */}
        <Posts>
          <Divider />
          {posts.map((post: PostMeta) => (
            <Post key={post.slug} content={post} />
          ))}
        </Posts>
      </div>
    </>
  )
}
