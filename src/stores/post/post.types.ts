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

export const postSagaActions = {
  GET_POSTS: 'GET_POSTS',
};

export type ActionGetPostType = {
  type: string;
};

export function getWeatherAction(): ActionGetPostType {
  return {
    type: postSagaActions.GET_POSTS,
  };
}
