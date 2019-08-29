import { all, call, put, takeLatest } from "redux-saga/effects";
import { clearCart } from "./cart.actions";
import userActionTypes from "./../user/user.types";

function* clearCartOnSignout() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
