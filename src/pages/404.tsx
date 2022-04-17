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

export default function PageNotFound({ posts }) {
  return (
    <>
      <Head>
        <title>404 - Page Not Found - But go to home - @tgmarinho</title>
      </Head>
      <div tw="py-32">
        <Header title="404" description="Page Not Found 😅" />
        <SEO />
        <Search />
      </div>
    </>
  )
}
