import {useAuth} from '../hooks/auth';
import {IComment, ICommentAPI} from '../models/comment.model';

/**
 *
 * @param {ICommentAPI[]} commentsApi
 * @return {IComment[]}
 */
export function adaptComment(commentsApi: ICommentAPI[]): IComment[] {
  if (!commentsApi.length) {
    return [] as IComment[];
  }

  const {user} = useAuth();

  return commentsApi.map((commentApi) => {
    return {
      id: commentApi.id,
      description: commentApi.body,
      user,
    };
  });
}
