import { call, all, put, takeLatest } from "redux-saga/effects";
import { GET_COMMENTS_REQUEST, NEW_COMMENTS_REQUEST } from "./types";
import { instance } from "../instance";

//actions
import {
  getCommentsSuccess,
  getCommentsFailure,
  newCommentsSuccess,
  newCommentsFailure,
} from "./actions";

function* getComments() {
  try {
    const comments = yield call(instance.get, "/comments");
    yield put(getCommentsSuccess(comments.data));
  } catch (e) {
    console.log(e);
    yield put(getCommentsFailure());
    throw new Error("Não foi possível carregar os comentarios");
  }
}

function* newComments(action) {
  try {
    const newComments = yield call(instance.post, "/comments", {
      ...action.payload.comment,
    });
    yield put(newCommentsSuccess(newComments.data));
  } catch (e) {
    console.log(e);
    yield put(newCommentsFailure());
    throw new Error("Não foi possível carregar os comentarios");
  }
}

export function* commentsSagas() {
  yield takeLatest(GET_COMMENTS_REQUEST, getComments);
  yield takeLatest(NEW_COMMENTS_REQUEST, newComments);
}
