import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ICommentState,
  ISetComments,
  IComment,
  IAddComment,
} from './comment.types';
import type { RootState } from '../reducers';

export const initialState: ICommentState = {
  comments: [],
  isLoading: false,
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<ISetComments>) => {
      state.comments = action.payload.comments;
    },
    setAddComment: (state, action: PayloadAction<IAddComment>) => {
      state.comments.unshift(action.payload.comment);
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setComments, setAddComment, setIsLoading } =
  commentSlice.actions;

export const selectGetCommentsById = (
  state: RootState,
  postId: number,
): IComment[] =>
  state.comments.comments.filter(comment => comment.postId === postId);

export const selectPostIsLoading = (state: RootState): boolean =>
  state.posts.isLoading;

export default commentSlice.reducer;
