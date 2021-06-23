import tw, { styled } from 'twin.macro'

export const Posts = styled.ul`
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
