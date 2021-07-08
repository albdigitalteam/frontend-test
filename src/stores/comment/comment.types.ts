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

export interface IAddComment {
  comment: IComment;
}

export const commentSagaActions = {
  GET_COMMENTS: 'GET_COMMENTS',
  ADD_COMMENT: 'ADD_COMMENT',
};

export type ActionGetCommentType = {
  type: string;
};

export function getCommentsAction(): ActionGetCommentType {
  return {
    type: commentSagaActions.GET_COMMENTS,
  };
}

export type ActionAddCommentType = {
  type: string;
  comment: IComment;
};

export function addCommentAction(comment: IComment): ActionAddCommentType {
  return {
    type: commentSagaActions.ADD_COMMENT,
    comment,
  };
}
