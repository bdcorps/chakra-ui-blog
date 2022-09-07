export interface SiteType {
  name: string
  description: string
  logo: string
  posts: PostType[]
}

export interface PostType {
  id: number
  title: string
  description: string
  image: string
  link: string
}

export interface DataType {
  name: string
}
