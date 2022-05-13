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

export default function HomePix() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Me envie um pix!</title>
      </Head>
      <div tw="pt-14">
        <Header title="Pix 💰" description=" " to="pix" />
        <SEO image="/tgmarinho.jpg" />
        <Layout>
          <figure className="rounded-xl">
            <div className="px-8 mb-4 space-y-4">
              <Pix
                title="Pix Me 🙏🏻"
                description="Copie o código da Chave Aleatória ou use QR Code com o seu Celular."
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
