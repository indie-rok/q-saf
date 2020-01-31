import { all } from "redux-saga/effects";
import EmailAuthSaga from "./Sessions/sagas";

export function* mainSaga() {
  yield all([EmailAuthSaga]);
}