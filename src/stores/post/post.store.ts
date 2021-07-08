import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostState, ISetPosts, IPost, IDeletePost } from './post.types';
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
    setDeletePost: (state, action: PayloadAction<IDeletePost>) => {
      state.posts = state.posts.filter(
        post => post.id !== action.payload.postId,
      );
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setPosts, setDeletePost, setIsLoading } = postSlice.actions;

export const selectGetPosts = (state: RootState): IPost[] => state.posts.posts;

export const selectPostIsLoading = (state: RootState): boolean =>
  state.posts.isLoading;

export default postSlice.reducer;
