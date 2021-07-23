export enum CommentTypes {
  LOAD_REQUEST = 'comment/LOAD_REQUEST',
  LOAD_SUCCESS = 'comment/LOAD_SUCCESS',
}

export interface IComment {
  postId: number;
  name: string;
  body: string;
}

export interface ICommentState {
  readonly data: IComment[];
}
