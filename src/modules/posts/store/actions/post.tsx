import {CREATE_POST, DELETE_POST, GET_POSTS} from '../types';
import {ErrorState} from '../../../../../interfaces';
import {IPost} from '../interfaces';

export const createPostAction = {
  request: (): any => ({type: CREATE_POST.REQUEST}),
  success: (data: any): any => ({type: CREATE_POST.SUCCESS, data}),
  failure: (error: ErrorState): any => ({
    type: CREATE_POST.FAILURE,
    failure: error,
  }),
};

export const deletePostAction = {
  request: (): any => ({type: DELETE_POST.REQUEST}),
  success: (): any => ({type: DELETE_POST.SUCCESS}),
  failure: (error: ErrorState): any => ({
    type: DELETE_POST.FAILURE,
    failure: error,
  }),
};

export const getPostsAction = {
  request: (): any => ({type: GET_POSTS.REQUEST}),
  success: (data: IPost[]): any => ({type: GET_POSTS.SUCCESS, data}),
  addPost: (post: IPost): any => ({type: GET_POSTS.ADD, post}),
  removePost: (postId: number): any => ({type: GET_POSTS.REMOVE, postId}),
  failure: (error: ErrorState): any => ({
    type: GET_POSTS.FAILURE,
    failure: error,
  }),
};
