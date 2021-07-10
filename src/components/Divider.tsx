import tw, { styled } from 'twin.macro'

export const Divider = styled.div`
  ${tw`absolute top-0 w-24 h-px col-start-1 transform -translate-x-1/2 bg-gray-400 left-1/2`}
  grid-column: 1;
`
