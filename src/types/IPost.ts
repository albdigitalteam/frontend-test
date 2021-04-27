export interface IPost {
  id: number,
  userId: number,
  author?: string,
  title: string,
  body: string,
  image_url?: string,
}
