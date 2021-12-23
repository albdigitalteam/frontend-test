/**
 * Interface for the 'Posts' data
 */
export interface PostsEntity {
  id: string | number; // Primary ID
  userId: number;
  title: string;
  body: string;
}
