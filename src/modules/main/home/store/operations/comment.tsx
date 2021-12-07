import * as Api from '../../api';
import * as Actions from '../actions';
import {ErrorState} from '../../../../../interfaces';
import {Comment, CreateCommentDto} from '../interfaces';

export const createCommentOperation =
  (commentDto: CreateCommentDto) => (dispatch: any) =>
    new Promise((resolve, reject) => {
      dispatch(Actions.COMMENT.createCommentAction.request());
      Api.COMMENTS.createComment(commentDto)
        .then(async res => {
          const body = await res.json();
          dispatch(Actions.COMMENT.createCommentAction.success(body));
          resolve(body);
        })
        .catch(async err => {
          const bodyError = await err.json();
          const errorState: ErrorState = {
            error: 'erro tal...',
            message: 'nao foi possivel....',
            status: bodyError.status,
          };
          dispatch(Actions.COMMENT.createCommentAction.failure(errorState));
          reject(bodyError);
        });
    });

export const getCommentsOperation = (postId: number) => (dispatch: any) =>
  new Promise((resolve, reject) => {
    dispatch(Actions.COMMENT.getCommentsFromPostAction.request());
    Api.COMMENTS.getComments(postId)
      .then(async res => {
        const comments: Comment[] = await res.json();
        dispatch(Actions.COMMENT.getCommentsFromPostAction.success(comments));
        resolve(comments);
      })
      .catch(async err => {
        const bodyError = await err.json();
        const errorState: ErrorState = {
          error: 'erro tal...',
          message: 'nao foi possivel....',
          status: bodyError.status,
        };
        dispatch(Actions.COMMENT.getCommentsFromPostAction.failure(errorState));
        reject(bodyError);
      });
  });
