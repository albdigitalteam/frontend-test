import { call, put, takeEvery } from 'redux-saga/effects';
import { action } from 'typesafe-actions'

import { api } from '../../../service'

export const home_types = {
  request_posts: 'REQUEST_POSTS',
  set_posts: 'SET_POSTS',
  request_comments: 'REQUEST_COMMENTS',
  set_comments: 'SET_COMMENTS',
  request_all_users: 'REQUEST_ALL_USERS',
  set_all_users: 'SET_ALL_USERS',
  request_new_comment: 'REQUEST_NEW_COMMENT',
  set_new_comment: 'SET_NEW_COMMENT',
  set_loading: 'SET_LOADING',
  set_loading_remove: 'SET_LOADING_REMOVE',
  set_loading_new_comment: 'SET_LOADING_NEW_COMMENT'
}

export const actionGetPosts = () => action(home_types.request_posts)
const actionSetposts = payload => action(home_types.set_posts, payload)
export const actionGetComments = () => action(home_types.request_comments)
const actionSetComments = payload => action(home_types.set_comments, payload)
export const actionGetAllUsers = () => action(home_types.request_all_users)
const actionSetUsers = () => action(home_types.set_all_users)
export const actionSetNewComment = payload => action(home_types.set_new_comment, payload)
export const actionSetLoadingNewComment = payload => action(home_types.set_loading_new_comment, payload)
export const actionSetLoading = payload => action(home_types.set_loading, payload)
export const actionSetLoadingRemovePost = payload => action(home_types.set_loading_remove, payload)

function* requestPosts() {
  try {
    yield put(actionSetLoading(true))
    const response = yield call(api.get, '/posts')
    const comments = yield requestComments()
    const users = yield requestAllUsers()
    let newList = []

    if(response?.status === 200) {
      const posts = response.data
      if(comments.length && users.length) {
        posts.forEach(post => {
          newList.push({
            ...post,
            user: users.find(use => use.id === post.userId),
            commentList: [comments.filter(com => com.postId === post.id)] 
          })
        });
      }
      yield put(actionSetposts(newList))
      yield put(actionSetLoading(false))
    }
  } catch (error) {
    yield put(actionSetLoading(false))
    console.log(error)
  }
}

function* requestComments() {
  try {
    const response = yield call(api.get, '/comments')
    if (response?.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

function* requestAllUsers() {
  try {
    const response = yield call(api.get, '/users')
    if(response?.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

function* sagaListener() {
  yield takeEvery(home_types.request_posts, requestPosts);
  yield takeEvery(home_types.request_comments, requestComments);
  yield takeEvery(home_types.request_all_users, requestAllUsers);
}

export default sagaListener
