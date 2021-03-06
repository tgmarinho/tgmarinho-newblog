// @ts-nocheck
import React, { ReactNode } from 'react'
import Head from 'next/head'
import tw, { styled, theme } from 'twin.macro'
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'
import FeedbackForm from '@/components/FeedbackForm'
import NewsletterForm from '@/components/NewsletterForm'
import Pix from '@/components/Pix'
import Navigation from '@/components/Navigation'
import CodeBlock from '@/elements/CodeBlock'
import ThematicBreak from '@/elements/ThematicBreak'
import ExternalLink from '@/elements/ExternalLink'
import InlineCode from '@/elements/InlineCode'
import UnorderedList from '@/elements/UnorderedList'
import OrderedList from '@/elements/OrderedList'
import Heading from '@/elements/Heading'
import Subheading from '@/elements/Subheading'
import ProblemStatement from '@/elements/ProblemStatement'
import { formatPath } from '@/lib/utils'
import SEO from '@/components/SEO'

const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
  day: 'numeric',
})

const mdxComponents = {
  a: ExternalLink,
  pre: CodeBlock,
  hr: ThematicBreak,
  inlineCode: InlineCode,
  ul: UnorderedList,
  ol: OrderedList,
  h2: Heading,
  h3: Subheading,
}

type Props = {
  frontMatter: {
    title: string
    description: string
    publishedAt: string
    image: string
    blurb?: string
    category: string
    background?: string
    __resourcePath: string
    layout: string
  }
  children: ReactNode
}

export default function Layout({ frontMatter, children }: Props) {
  const slug = formatPath(frontMatter?.__resourcePath)

  const { title, image, description } = frontMatter
  const path = `https://tgmarinho.com/posts/${slug}`

  return (
    <>
      <MDXProvider components={mdxComponents}>
        <Article>
          <SEO {...{ title, path, image, description }} />
          {/* <Head>
            <title>{frontMatter?.title}</title>
            <meta name="description" content={frontMatter?.description} />
            <meta name="author" content="Thiago Marinho" />
            <meta property="og:title" content={frontMatter?.title} />
            <meta
              property="og:description"
              content={frontMatter?.description}
            />
            <meta
              property="og:image"
              content={`https://tgmarinho.com${frontMatter?.image}`}
            />
            <meta
              property="og:url"
              content={`https://tgmarinho.com/posts/${slug}`}
            />
            <meta name="twitter:card" content="summary_large_image" />
          </Head> */}
          <Header>
            <Title>{frontMatter?.title}</Title>
          </Header>

          <Meta>
            <Link href="/me">
              <a href="#">
                <Author>
                  <Avatar src="/tgmarinho.jpg" alt="Thiago Marinho" />
                  <p tw="text-base">Thiago Marinho</p>
                </Author>
              </a>
            </Link>
            <p tw="text-base">
              {formatter.format(new Date(frontMatter?.publishedAt))}
            </p>
          </Meta>
          {/* <ClapWrapper>
          <Clap />
          {<p>18</p>}
        </ClapWrapper> */}
          {children}

          <FormContainer>
            <Pix />
            <FeedbackForm slug={slug} />
            <NewsletterForm />
          </FormContainer>
        </Article>
        <Footer>
          <Navigation tw="mt-8" />
        </Footer>
      </MDXProvider>
    </>
  )
}

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 50%;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-text-secondary);
  > :first-child {
    margin-right: 8px;
  }
`

const Header = styled.header`
  background: var(--color-background);
  margin-top: 8rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  @media screen and (min-width: ${theme`screens.lg`}) {
    height: 100%;
  }
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
`

const Article = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  /* padding-bottom: 80px; */
  /* grid-template-columns: 2rem 1fr 2rem; */
  line-height: 2rem;
  font-size: 1.2rem;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  > * {
    grid-column: 2 / span 1;
    margin-bottom: 1.5em;
  }
  > ${Header} {
    grid-column: 1 / -1;
  }
  > ${Header}, > ${Meta} {
    margin-bottom: 48px;
    @media screen and (min-width: ${theme`screens.lg`}) {
      margin-bottom: 60px;
    }
  }
  > figure {
    margin-bottom: 2rem;
  }
  > ${CodeBlock} {
    margin-top: 24px;
    margin-bottom: 48px;
    line-height: 1.6;
    border-radius: 0;
    border-right-width: 0;
    border-left-width: 0;
    grid-column: 1 / -1;
    max-width: 100vw;
    @media screen and (min-width: ${theme`screens.md`}) {
      grid-column: 5 / span 1;
      /* For some reason revert doesn't work here so I have to manually set it back */
      border-radius: 6px;
      border-right-width: 2px;
      border-left-width: 2px;
    }
  }
  > ${ThematicBreak} {
    margin-top: 24px;
    margin-bottom: 48px;
  }
  > ${Heading} {
    margin-top: 80px;
    margin-bottom: 32px;
  }
  > ${Subheading} {
    margin-top: 32px;
    margin-bottom: 24px;
  }
  > ${ProblemStatement} {
    margin-bottom: 48px;
  }
  > .full-width,
  > .full-width-2x,
  > .full-width-3x {
    grid-column: 1 / -1;
  }
  @media screen and (min-width: 770px) {
    grid-template-columns:
      1fr minmax(0, 6rem) minmax(0, 4rem) 2rem min(85ch, calc(100% - 2rem))
      2rem minmax(0, 4rem) minmax(0, 6rem) 1fr;
    > * {
      grid-column: 5 / span 1;
    }
    > .full-width {
      grid-column: 4 / -4;
    }
    > .full-width-2x {
      grid-column: 3 / -3;
    }
    > .full-width-3x {
      grid-column: 2 / -2;
    }
  }
`

const Title = styled.h1`
  margin-top: -20px;
  ${tw`text-center mx-auto`}
  font-family: Recoleta;
  font-size: 3rem;
  font-weight: 600;
  line-height: 3.3rem;
  width: 100%;
  /* max-width: min(100vw, 14ch); */
  @media screen and (min-width: ${theme`screens.md`}) {
    font-size: 4rem;
    line-height: 4.2rem;
  }
`

const FormContainer = styled.div`
  ${tw`space-y-8`}
  transform: translateY(14rem);
  margin-top: -10rem;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 32px;
  padding-top: 16rem;
  padding-bottom: 6rem;
  background: var(--gray200);
  color: var(--color-text-secondary);
  height: 320px;
`
