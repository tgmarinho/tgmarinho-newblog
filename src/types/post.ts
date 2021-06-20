export type PostMeta = {
  title: string
  publishedAt: string
  description: string
  slug?: any
  blurb: string
  editedAt: string;
  category?: "draft" | "project" | "post"
  image?: string
  source?: string
}

export type Post = {
  meta: PostMeta
  code?: any
}