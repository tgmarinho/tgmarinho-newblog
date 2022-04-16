import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiArrowRight, HiOutlineEye } from 'react-icons/hi'
import 'twin.macro'

export const Post = (props) => {
  const [counter, setCounter] = useState<string | number>('...')

  const {
    objectID: slug,
    title,
    description,
    publishedAt,
    readingTime,
  } = props.content

  useEffect(() => {
    getCounterByPostView(slug)
  }, [slug])

  const updateCounterByPostView = async (url) => {
    await fetch(`/api/page-views?slug=${url}`, {
      method: 'PUT',
    })
  }

  const getCounterByPostView = async (url) => {
    const response = await fetch(`/api/page-views?slug=${url}`, {
      method: 'GET',
    })
    const data = await response.json()
    setCounter(data.counter)
  }

  return (
    <li
      key={slug}
      tw="px-8 py-6 hover:bg-gray-200 rounded-xl"
      aria-hidden="true"
      onClick={() => updateCounterByPostView(slug)}
    >
      <Link href={`posts/${slug}`}>
        <a tw="flex items-center justify-between cursor-pointer space-x-8">
          <div tw="space-y-4 w-full">
            <h1 tw="text-3xl sm:text-2xl font-serif">{title}</h1>
            <p tw="text-gray-600">{description}</p>
            <div tw="flex justify-between">
              <p tw="text-sm text-gray-600">
                {publishedAt &&
                  new Intl.DateTimeFormat('en-US', {
                    month: 'long',
                    year: 'numeric',
                    day: 'numeric',
                  }).format(new Date(publishedAt))}
              </p>
              <div tw="flex justify-between items-center">
                <p tw="text-sm mr-1 text-gray-600">{`${readingTime} min read •`}</p>
                <div tw="flex justify-between items-center">
                  <p tw="text-sm mr-1 text-gray-600">{`${counter}`}</p>{' '}
                  <HiOutlineEye color="gray" />
                </div>
              </div>
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
