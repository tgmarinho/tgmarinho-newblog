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
import { RoughNotation } from 'react-rough-notation'
import Pix from '@/components/Pix'

export default function Support() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Betting on People!</title>
      </Head>
      <div tw="pt-14">
        <Header title="$ponsor" description="I can do more 🤙" to="sponsor" />
        <SEO image="/tgmarinho.jpg" />
        <Layout>
          <figure className="rounded-xl">
            <div className="pt-6 px-8 mb-4 space-y-4">
              <blockquote>
                <p className="text-lg text-justify font-medium">
                  I've been here writing, doing some youtube videos, talking,
                  learning, and teaching in public about Tech and Software
                  Development. I'm Living my dream and passion of helping
                  people. I do it for pleasure and happiness. I've realized my
                  professional dream of working remote for an international
                  company, now I'm helping people to do the same. I've helped
                  more than ten people get a job in the tech world abroad,
                  earning a good income. It's a great feeling. There's nothing
                  like it!
                </p>
              </blockquote>
              <figcaption className="font-medium text-center">
                <div className="text-cyan-600 2xl:font-bold">
                  Thiago Marinho
                </div>
                <div className="text-gray-500">
                  Software Engineer, Fullstack
                </div>
              </figcaption>
              <Pix
                title="Support 💰"
                description="Now you can help me, thanking me, recognizing my efforts, doing a quick Pix any value is welcome."
              />
            </div>

            <div className="pt-6 px-8 space-y-4"></div>
            <SocialLinks />
          </figure>
        </Layout>
      </div>
    </>
  )
}
