import { call, all, put, takeLatest } from "redux-saga/effects";
import {
  GET_POST_REQUEST,
  DELETE_POST_REQUEST,
  NEW_POST_REQUEST,
} from "./types";
import { instance } from "../instance";

//actions
import {
  getPostsSuccess,
  getPostsFailure,
  deletePostSuccess,
  deletePostFailure,
  newPostSuccess,
  newPostFailure,
} from "./actions";

function* getPosts() {
  try {
    const posts = yield call(instance.get, "/posts");
    yield put(getPostsSuccess(posts.data));
  } catch (e) {
    console.log(e);
    yield put(getPostsFailure());
    throw new Error("Não foi possível carregar os posts");
  }
}

function* newPost(action) {
  try {
    const posts = yield call(instance.post, "/posts", {
      ...action.payload.post,
    });
    yield put(newPostSuccess(posts.data));
  } catch (e) {
    console.log(e);
    yield put(newPostFailure());
    throw new Error("Não foi possível carregar os posts");
  }
}

function* deletePost(action) {
  try {
    yield call(instance.delete, `/posts/${action.payload.postId}`);
    yield put(deletePostSuccess(action.payload.postId));
  } catch (e) {
    console.log(e);
    yield put(deletePostFailure());
    throw new Error("Não foi possível carregar os posts");
  }
}

export function* postSagas() {
  yield takeLatest(GET_POST_REQUEST, getPosts);
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
  yield takeLatest(NEW_POST_REQUEST, newPost);
}
