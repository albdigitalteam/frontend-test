import { CommentsEntity } from './comments/comments.models';
import { PostsEntity } from './post/posts.models';
import { UsersEntity } from './user/users.models';
/**
 * Interface for the 'CombinedPosts' data
 */

export interface CombinedPosts extends PostsEntity {
  comments: CommentsEntity[];
  user: UsersEntity;
}
