import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./user.types";

import { googleSignInSuccess, googleSignInFail } from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfile
} from "../../firebase/firebase.utils";

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfile, user);
    const snapshot = yield userRef.get();
    yield put(googleSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    yield put(googleSignInFail(err));
  }
}

export function* googleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(googleSignIn)]);
}
