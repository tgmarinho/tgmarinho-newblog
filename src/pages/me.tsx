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
      <div tw="py-32">
        <Header />
        <SEO />
        {/* <div onClick={() => router.push('search')}>
          <Search />
        </div> */}
        <p>
          Sou formado em Ciência da Computação pela Uniderp/Campo Grande-MS,
          atualmente Anhanguera (2013).
        </p>

        <p>
          Sou especialista em Engenharia de Software pala Estácio de Sá (2015).
        </p>

        <p>Sou muito bem casado e feliz com minha esposa, amo minha família.</p>

        <p>
          No meu tempo livre, faço academia, gosto de caminhar, assitir um
          Netflix, compartilhar conhecimento através de blog ou vídeo e até
          mesmo presencial.
        </p>

        <h2>Habilidades</h2>

        <p>
          Em tantos anos de carreira como <i>Full Stack Informática</i>, desde
          os 10 anos de idade aprendendo e tals, tive contato com muita
          tecnologia e diversas áreas da TI (design com Corel, Photoshop,
          Fireworks, manutenção de computadores, redes, etc), mas foi da área de
          desenvolvimento de software que mas gostei, já trabalhei com:
        </p>

        <h2>Foco</h2>

        <p>
          Hoje estou focado no desenvolvimento Web/Mobile Full Stack com
          Javascript Node, React, React Native e todo ecossistema por volta
          dessas tecnologias.
        </p>

        <h2>Contato</h2>

        <p>
          Você pode entrar em contato comigo através de qualquer uma das minhas
          redes sociais.
        </p>

        <SocialLinks />
      </div>
    </>
  )
}
