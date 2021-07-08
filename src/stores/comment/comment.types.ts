export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentState {
  comments: IComment[];
  isLoading: boolean;
}

export interface ISetComments {
  comments: IComment[];
}

export const commentSagaActions = {
  GET_COMMENTS: 'GET_COMMENTS',
};

export type ActionGetCommentType = {
  type: string;
};

export function getCommentsAction(): ActionGetCommentType {
  return {
    type: commentSagaActions.GET_COMMENTS,
  };
}
