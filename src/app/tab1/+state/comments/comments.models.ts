/**
 * Interface for the 'Comments' data
 */

export interface CommentsEntity {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
