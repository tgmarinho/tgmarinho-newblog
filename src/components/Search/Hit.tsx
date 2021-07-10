/* eslint-disable */
import { Post } from '@/components/Post'

export const Hit = ({ hit }) => {
  const data = {
    ...hit,
  }

  return <Post content={data} />
}
