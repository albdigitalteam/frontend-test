import {IComment, ICommentAPI} from '../models/comment.model';

import profileImage from '../assets/profile.svg';

export function adaptComment(commentsApi: ICommentAPI[]): IComment[] {
  if (!commentsApi.length) {
    return [] as IComment[];
  }

  return commentsApi.map((commentApi) => {
    return {
      id: commentApi.id,
      description: commentApi.body,
      user: {
        name: commentApi.name,
        email: commentApi.email,
        avatar: {
          url: profileImage,
        },
      },
    };
  });
}
