export enum CommentTypes {
  LOAD_REQUEST = 'comment/LOAD_REQUEST',
  LOAD_SUCCESS = 'comment/LOAD_SUCCESS',
}

export interface IComment {
  id: number;
  postId: number;
  name: string;
  body: string;
  email: string;
}

export interface ICommentState {
  readonly data: IComment[];
}
