export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostState {
  posts: IPost[];
  isLoading: boolean;
}

export interface ISetPosts {
  posts: IPost[];
}

export interface IDeletePost {
  postId: number;
}

export interface IAddPost {
  post: IPost;
}

export const postSagaActions = {
  GET_POSTS: 'GET_POSTS',
  DELETE_POST: 'DELETE_POST',
  ADD_POST: 'ADD_POST',
};

export type ActionGetPostType = {
  type: string;
};

export function getPostsAction(): ActionGetPostType {
  return {
    type: postSagaActions.GET_POSTS,
  };
}

export type ActionDeletePostType = {
  type: string;
  postId: number;
};

export function deletePostAction(postId: number): ActionDeletePostType {
  return {
    type: postSagaActions.DELETE_POST,
    postId,
  };
}

export type ActionAddPostType = {
  type: string;
  post: IPost;
};

export function addPostAction(post: IPost): ActionAddPostType {
  return {
    type: postSagaActions.ADD_POST,
    post,
  };
}
