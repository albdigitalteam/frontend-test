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
}

export const actionGetPosts = () => action(home_types.request_posts)
const actionSetposts = payload => action(home_types.set_posts, payload)
export const actionGetComments = () => action(home_types.request_comments)
const actionSetComments = payload => action(home_types.set_comments, payload)
export const actionGetAllUsers = () => action(home_types.request_all_users)
const actionSetUsers = () => action(home_types.set_all_users)

function* requestPosts() {
  try {
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
      console.log('res all posts::::', newList)
      yield put(actionSetposts(newList))
    }
  } catch (error) {
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
