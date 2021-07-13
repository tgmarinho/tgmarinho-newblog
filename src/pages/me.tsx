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
import SocialLinks from '@/components/SocialLinks'
import { Layout } from '@/components/Layout'

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
        <title>Hey I'm here!</title>
      </Head>
      <div tw="py-14">
        <Header />
        <SEO />
        {/* <div onClick={() => router.push('search')}>
          <Search />
        </div> */}
        <Layout>
        <figure className="rounded-xl">
          <img className="w-32 h-32 rounded-full mx-auto" src="/tgmarinho.jpg" alt="" width="384" height="512" />
            <div className="pt-6 text-center space-y-4">
              <blockquote>
                <p className="text-lg font-semibold">
                  I'm a passionate software engineer working with Javascript, React and React
                  Native with all ecosystems involved.
                  I regard myself as a cutting-edge tech early adopter, an openminded and tuned in to the newest tools releases professional.
                  I will be here writing about what I've been learning and coding, sometimes I'll share some thoughts about life.
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-cyan-600">
                  Thiago Marinho
                </div>
                <div className="text-gray-500">
                  Software Engineer, Fullstack
                </div>
              </figcaption>
            </div>
            <SocialLinks />
          </figure>
        </Layout>
      </div>
    </>
  )
}
