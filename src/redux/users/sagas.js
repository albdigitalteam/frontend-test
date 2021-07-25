import { call, all, put, takeLatest } from "redux-saga/effects";
import { GET_USERS_REQUEST } from "./types";
import { instance } from "../instance";

//actions
import { getUsersSuccess, getUsersFailure } from "./actions";

function* getUsers() {
  try {
    const users = yield call(instance.get, "/users");
    yield put(getUsersSuccess(users.data));
  } catch (e) {
    console.log(e);
    yield put(getUsersFailure());
    throw new Error("Não foi possível carregar os usuarios");
  }
}

export function* usersSagas() {
  yield takeLatest(GET_USERS_REQUEST, getUsers);
}
