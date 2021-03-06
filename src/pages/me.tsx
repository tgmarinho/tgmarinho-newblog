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
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import { Divider } from '@/components/Divider'
import SEO from '@/components/SEO'
import SocialLinks from '@/components/SocialLinks'
import { Layout } from '@/components/Layout'

export default function AboutMe() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Hey I'm here!</title>
      </Head>
      <div tw="pt-14">
        <Header title="About" description="You can call me TG 😉" to="me" />
        <SEO image="/tgmarinho.jpg" />
        <Layout>
          <figure className="rounded-xl">
            <img
              className="w-32 h-32 mt-8 rounded-full mx-auto"
              src="/tgmarinho.jpg"
              alt="Thiago Marinho"
              width="384"
              height="512"
            />
            <div className="pt-6 px-8 space-y-4">
              <RoughNotationGroup show={true}>
                <blockquote>
                  <p className="text-lg text-justify font-medium">
                    I'm a{' '}
                    <RoughNotation color="red" type="circle">
                      passionate
                    </RoughNotation>{' '}
                    software engineer working with Javascript, React and React
                    Native and with all ecosystems involved. I regard myself as
                    a cutting-edge tech early adopter, an open-minded and tuned
                    into the newest tools releases professional. I will be here{' '}
                    <RoughNotation color="red" type="underline">
                      writing
                    </RoughNotation>{' '}
                    about what I've been{' '}
                    <RoughNotation color="yellow" type="highlight">
                      learning
                    </RoughNotation>{' '}
                    and{' '}
                    <RoughNotation color="yellow" type="highlight">
                      coding
                    </RoughNotation>
                    , moreover sometimes I'll be sharing some thoughts about{' '}
                    <RoughNotation color="red" type="underline">
                      life
                    </RoughNotation>{' '}
                    too.
                  </p>
                </blockquote>
                <figcaption className="font-medium text-center">
                  <div className="text-cyan-600 2xl:font-bold">
                    Thiago Marinho
                  </div>
                  <div className="text-gray-500">
                    <RoughNotation color="blue" type="underline">
                      Software Engineer, Fullstack
                    </RoughNotation>
                  </div>
                </figcaption>
              </RoughNotationGroup>
            </div>
            <SocialLinks />
          </figure>
        </Layout>
      </div>
    </>
  )
}
