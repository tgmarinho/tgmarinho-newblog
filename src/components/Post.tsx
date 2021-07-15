import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import 'twin.macro'

export const Post = (props) => {
  const {
    objectID: slug,
    title,
    description,
    publishedAt,
    readingTime,
  } = props.content
  return (
    <li key={slug} tw="px-8 py-6 hover:bg-gray-200 rounded-xl">
      <Link href={`posts/${slug}`}>
        <a tw="flex items-center justify-between cursor-pointer space-x-8">
          <div tw="space-y-4 w-full">
            <h1 tw="text-3xl font-serif">{title}</h1>
            <p tw="text-gray-600">{description}</p>
            <div tw="flex justify-between">
              <p tw="text-sm text-gray-600">
                Written on{' '}
                {new Intl.DateTimeFormat('en-US', {
                  month: 'long',
                  year: 'numeric',
                  day: 'numeric',
                }).format(new Date(publishedAt))}
              </p>
              <p tw="text-sm text-gray-600">{`${readingTime} min read`}</p>
            </div>
          </div>
          <p tw="text-2xl text-gray-600">
            <HiArrowRight />
          </p>
        </a>
      </Link>
    </li>
  )
}
