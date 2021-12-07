import * as Api from '../../api';
import * as Actions from '../actions';
import {ErrorState} from '../../../../../interfaces';
import {ICreatePostDto, IPost} from '../interfaces';

export const createPostOperation =
  (postDto: ICreatePostDto) => (dispatch: any) =>
    new Promise((resolve, reject) => {
      dispatch(Actions.POST.createPostAction.request());
      Api.POSTS.createPost(postDto)
        .then(async res => {
          const body = await res.json();
          dispatch(Actions.POST.createPostAction.success(body));
          dispatch(Actions.POST.getPostsAction.addPost(body));
          resolve(body);
        })
        .catch(async err => {
          const bodyError = await err.json();
          const errorState: ErrorState = {
            error: 'erro tal...',
            message: 'nao foi possivel....',
            status: bodyError.status,
          };
          dispatch(Actions.POST.createPostAction.failure(errorState));
          reject(bodyError);
        });
    });

export const deletePostOperation = (postId: number) => (dispatch: any) =>
  new Promise((resolve, reject) => {
    dispatch(Actions.POST.deletePostAction.request());
    Api.POSTS.deletePost(postId)
      .then(async () => {
        dispatch(Actions.POST.deletePostAction.success());
        dispatch(Actions.POST.getPostsAction.removePost(postId));
        resolve(true);
      })
      .catch(async err => {
        const bodyError = await err.json();
        const errorState: ErrorState = {
          error: 'erro tal...',
          message: 'nao foi possivel....',
          status: bodyError.status,
        };
        dispatch(Actions.POST.deletePostAction.failure(errorState));
        reject(bodyError);
      });
  });

export const getPostsOperation = () => (dispatch: any) =>
  new Promise((resolve, reject) => {
    dispatch(Actions.POST.getPostsAction.request());
    Api.POSTS.getPosts()
      .then(async res => {
        const posts: IPost[] = await res.json();
        dispatch(Actions.POST.getPostsAction.success(posts));
        resolve(posts);
      })
      .catch(async err => {
        const bodyError = await err.json();
        const errorState: ErrorState = {
          error: 'erro tal...',
          message: 'nao foi possivel....',
          status: bodyError.status,
        };
        dispatch(Actions.POST.getPostsAction.failure(errorState));
        reject(bodyError);
      });
  });
