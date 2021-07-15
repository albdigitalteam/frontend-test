export enum CommentTypes {
  LOAD_COMMENT_REQUEST = '@comment/LOAD_COMMENT_REQUEST',
  LOAD_COMMENT_SUCCESS = '@comment/LOAD_COMMENT_SUCCESS',
  LOAD_COMMENT_FAILURE = '@comment/LOAD_COMMENT_FAILURE',
  ADD_COMMENT_REQUEST = '@comment/ADD_COMMENT_REQUEST',
  DELETE_COMMENT_STORE = '@comment/DELETE_COMMENT_STORE',
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type AddComment = Omit<Comment, 'id'>;

export interface CommentState {
  readonly data: Comment[];
  readonly loading: boolean;
  readonly error: boolean;
}
