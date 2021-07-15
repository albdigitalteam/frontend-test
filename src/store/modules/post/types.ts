export enum PostTypes {
  LOAD_POST_REQUEST = '@post/LOAD_POST_REQUEST',
  LOAD_POST_SUCCESS = '@post/LOAD_POST_SUCCESS',
  LOAD_POST_FAILURE = '@post/LOAD_POST_FAILURE',
  ADD_POST_REQUEST = '@post/ADD_POST_REQUEST',
  ADD_POST_SUCCESS = '@post/ADD_POST_SUCCESS',
  DELETE_POST_STORE = '@post/DELETE_POST_STORE',
}

export interface Post {
  userId: number;
  userName: string;
  id: number;
  title: string;
  body: string;
}

export type AddPost = Omit<Post, 'id' | 'userName'>;

export interface PostState {
  readonly data: Post[];
  readonly loading: boolean;
  readonly error: boolean;
}
