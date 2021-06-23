import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import tw, { styled } from 'twin.macro'

export const Post = (props) => {
  console.log(props)
  const { slug, title, description, publishedAt } = props.content
  return (
    <li key={slug} tw="px-8 py-4 hover:bg-gray-200 rounded-xl">
      <Link href={`posts/${slug}`}>
        <a tw="flex items-center justify-between cursor-pointer space-x-8">
          <div tw="space-y-4">
            <h1 tw="text-3xl font-serif">{title}</h1>
            <p tw="text-gray-600">{description}</p>
            <p tw="text-sm text-gray-600">
              Written on {publishedAt}
              {/* {new Intl.DateTimeFormat('en-US', {
                month: 'long',
                year: 'numeric',
                day: 'numeric',
              }).format(new Date(publishedAt))} */}
            </p>
          </div>
          <p tw="text-2xl text-gray-600">
            <HiArrowRight />
          </p>
        </a>
      </Link>
    </li>
  )
}
