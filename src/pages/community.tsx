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
import { FaDiscord } from 'react-icons/fa'
import config from '../config'
import { AnimateSharedLayout, motion } from 'framer-motion'

export default function Community() {
  const router = useRouter()

  return (
    <AnimateSharedLayout>
      <Head>
        <title>Betting on People!</title>
      </Head>
      <div tw="pt-14">
        <Header
          title="Community"
          description="Together we go so far ✈️"
          to="community"
        />
        <SEO image="/tgmarinho.jpg" />
        <Layout>
          <figure className="rounded-xl">
            <motion.div
              className="w-32 h-30 rounded-full mx-auto"
              whileHover={{
                skewY: -5,
                skewX: 5,
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
            >
              <a
                href={config.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size={120} color="#5F8AE2" />
              </a>
            </motion.div>

            <div className="pt-6 px-8 mb-4 space-y-4">
              <blockquote>
                <p className="text-lg text-justify font-medium">
                  I love to meet new people and talk. I believe that we can grow
                  together by sharing experiences and helping each other. No one
                  is too smart that can't learn more, and no one is dumb that
                  can't teach something. So, please join the community, and
                  let's grow together.
                </p>
              </blockquote>
              <figcaption className="font-medium text-center">
                <div className="text-cyan-600 2xl:font-bold">
                  Thiago Marinho
                </div>
                <div className="text-gray-500">Software Engineer</div>
              </figcaption>
            </div>

            <div className="pt-6 px-8 space-y-4"></div>
            <SocialLinks />
          </figure>
        </Layout>
      </div>
    </AnimateSharedLayout>
  )
}
