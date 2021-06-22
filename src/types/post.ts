export interface PostMeta {
  title: string
  publishedAt: string
  description: string
  slug?: any
  blurb: string
  editedAt: string
  category?: `draft` | `project` | `post`
  image?: string
  source?: string
  statys?: string
}

export interface Post {
  meta: PostMeta
  code?: any
}
