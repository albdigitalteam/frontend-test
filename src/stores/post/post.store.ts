import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostState, ISetPosts, IPost } from './post.types';
import type { RootState } from '../reducers';

export const initialState: IPostState = {
  posts: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<ISetPosts>) => {
      state.posts = action.payload.posts;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setPosts, setIsLoading } = postSlice.actions;

export const selectGetPosts = (state: RootState): IPost[] => state.posts.posts;

export const selectPostIsLoading = (state: RootState): boolean =>
  state.posts.isLoading;

export default postSlice.reducer;
