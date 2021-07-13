import tw, { styled } from 'twin.macro'

export const Title = styled.h1`
  ${tw`font-serif text-center`}
  font-size: 6rem;
  line-height: 0.9;

  @media (max-width: 600px) {
    font-size: 4.2rem;
  }
  
`
