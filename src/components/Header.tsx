import 'twin.macro'
import { Title } from '@/components/Title'
import Link from 'next/link'

type Props = {
  title?: string
  description?: string
  to?: null | 'support' | 'community' | 'me'
}

export const Header = ({ title, description, to }: Props) => (
  <header className="mx-auto mt-12 mb-4 space-y-16">
    <Link href={to ? `/${to}` : '/'}>
      <a>
        <Title tw="mx-auto">{title ? title : '@tgmarinho'}</Title>
      </a>
    </Link>
    <p tw="text-center max-w-2xl mx-auto px-8 font-serif text-2xl">
      {description ? description : 'Blogging about Code and Life'}
    </p>
  </header>
)
