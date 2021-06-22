// @ts-nocheck
/* eslint-disable */
import Head from 'next/head'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'
import { HiArrowRight } from 'react-icons/hi'
import { getAllPosts } from '@/lib/mdx'

import ExternalLink from '@/elements/ExternalLink'
import { GetStaticProps } from 'next'
import { PostMeta } from '@/types/post'

export const getStaticProps: GetStaticProps<PostMeta[]> = async () => {
  const posts = getAllPosts('post')

  return { props: { posts } }
}

export default function HomePage({ posts }) {
  posts.sort((a, b) =>
    new Date(a.publishedAt) < new Date(b.publishedAt) ? 1 : -1
  )
  return (
    <>
      <Head>
        <title>@tgmarinho</title>
      </Head>
      <div tw="py-32">
        <header className="mx-auto mb-24 space-y-16">
          <Title tw="mx-auto">@tgmarinho</Title>
          <p tw="text-center max-w-2xl mx-auto px-8 font-serif text-2xl">
            An blog about Live and Code, by
            <br />
            <ExternalLink href="https://tgmarinho.com">
              Thiago Marinho <span>👨‍💻</span>
            </ExternalLink>
            .
          </p>
        </header>
        <Posts>
          <Divider />
          {posts.map(({ title, slug, description, publishedAt }) => (
            <li key={slug} tw="px-8 py-4 hover:bg-gray-200 rounded-xl">
              <Link href={`posts/${slug}`}>
                <a tw="flex items-center justify-between cursor-pointer space-x-8">
                  <div tw="space-y-4">
                    <h1 tw="text-3xl font-serif">{title}</h1>
                    <p tw="text-gray-600">{description}</p>
                    <p tw="text-sm text-gray-600">
                      Last updated{' '}
                      {new Intl.DateTimeFormat('en-US', {
                        month: 'long',
                        year: 'numeric',
                        day: 'numeric',
                      }).format(new Date(publishedAt))}
                    </p>
                  </div>
                  <p tw="text-2xl text-gray-600">
                    <HiArrowRight />
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </Posts>
      </div>
    </>
  )
}

const Title = styled.h1`
  ${tw`font-serif text-center`}
  font-size: 6rem;
  line-height: 0.9;
`

const Posts = styled.ul`
  ${tw`pt-16 space-y-4`}
  display: grid;
  grid-template-columns: 1fr min(85ch, 100%) 1fr;
  position: relative;

  > * {
    grid-column: 2;
  }

  > :last-child {
    margin-top: 3rem !important;
  }
`

const Divider = styled.div`
  ${tw`absolute top-0 w-24 h-px col-start-1 transform -translate-x-1/2 bg-gray-400 left-1/2`}
  grid-column: 1;
`
