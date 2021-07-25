import { all } from "redux-saga/effects";
import { postSagas } from "./posts/sagas";
import { commentsSagas } from "./comments/sagas";
import { usersSagas } from "./users/sagas";

export default function* rootSaga() {
  yield all([postSagas(), commentsSagas(), usersSagas()]);
}
