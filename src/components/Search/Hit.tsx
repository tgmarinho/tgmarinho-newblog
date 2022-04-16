/* eslint-disable */
import { Post } from '@/components/Post'
// TODO https://github.com/algolia/doc-code-samples/blob/master/React%20InstantSearch/infinite-scroll/src/InfiniteHits.js
// infinitescroll

export const Hit = ({ hit }) => {
  const data = {
    ...hit,
  }
  return <Post content={data} />
}
