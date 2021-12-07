import {GET_COMMENTS_FROM_POST, CREATE_COMMENT} from '../types';
import {ErrorState} from '@interfaces/';
import {IComment} from '@modules/comments/store/interfaces';

export const getCommentsFromPostAction = {
  request: (): any => ({type: GET_COMMENTS_FROM_POST.REQUEST}),
  success: (data: any): any => ({type: GET_COMMENTS_FROM_POST.SUCCESS, data}),
  failure: (error: ErrorState): any => ({
    type: GET_COMMENTS_FROM_POST.FAILURE,
    failure: error,
  }),
  add: (comment: IComment): any => ({
    type: GET_COMMENTS_FROM_POST.ADD,
    comment: comment,
  }),
};

export const createCommentAction = {
  request: (): any => ({type: CREATE_COMMENT.REQUEST}),
  success: (data: any): any => ({type: CREATE_COMMENT.SUCCESS, data}),
  failure: (error: ErrorState): any => ({
    type: CREATE_COMMENT.FAILURE,
    failure: error,
  }),
};
