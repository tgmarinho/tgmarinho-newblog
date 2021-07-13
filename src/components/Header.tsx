import 'twin.macro'
import { Title } from '@/components/Title'
import ExternalLink from '@/elements/ExternalLink'

export const Header = () => (
  <header className="mx-auto mt-8 mb-16 space-y-16">
    <Title tw="mx-auto">@tgmarinho</Title>
    <p tw="text-center max-w-2xl mx-auto px-8 font-serif text-2xl">
      Blogging about Code and Life
    </p>
  </header>
)
