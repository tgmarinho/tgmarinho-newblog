import 'twin.macro'
import { Title } from '@/components/Title'
import Link from 'next/link'

export const Header = () => (
  <header className="mx-auto mt-12 mb-4 space-y-16">
    <Link href="/">
      <a>
        <Title tw="mx-auto">@tgmarinho</Title>
      </a>
    </Link>
    <p tw="text-center max-w-2xl mx-auto px-8 font-serif text-2xl">
      Blogging about Code and Life
    </p>
  </header>
)
