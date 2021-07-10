// @ts-nocheck
/* eslint-disable */
import Head from 'next/head'
import tw, { styled } from 'twin.macro'
import { getAllPosts } from '@/lib/mdx'
import { Search } from '@/components/Search'
import { Posts } from '@/components/Posts'
import { Divider } from '@/components/Divider'

import { GetStaticProps } from 'next'
import { PostMeta } from '@/types/post'
import { Header } from '@/components/Header'

export const getStaticProps: GetStaticProps<PostMeta[]> = async () => {
  const posts = getAllPosts('post')

  return { props: { posts } }
}

export default function SearchPage() {
  return (
    <>
      <Head>
        <title>Search in @tgmarinho</title>
      </Head>
      <div tw="py-32">
        <Header />

        <Posts>
          <Divider />
          <Search />
        </Posts>
      </div>
    </>
  )
}
