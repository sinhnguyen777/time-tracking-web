import { all, takeLatest } from "redux-saga/effects";
import { globalActions } from "./slice";

export default function* rootSaga() {
  yield all([]);
}

export function* globalSaga(): any {
  yield takeLatest(globalActions.init.type, rootSaga);
}
