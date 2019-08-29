import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./user.types";

import {
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail
} from "./user.actions";

import {
  auth,
  googleProvider,
  createUserProfile,
  getCurrentUser
} from "../../firebase/firebase.utils";

function* userAuthSnapshot(user) {
  try {
    const userRef = yield call(createUserProfile, user);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    yield put(signInFail(err));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield userAuthSnapshot(user);
  } catch (err) {
    yield put(signInFail(err));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield userAuthSnapshot(user);
  } catch (err) {
    yield put(signInFail(err));
  }
}

export function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield userAuthSnapshot(user);
  } catch (err) {
    yield put(signInFail(err));
  }
}

export function* userSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFail(err));
  }
}

export function* googleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN, signInWithGoogle);
}

export function* emailSignIn() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN, signInWithEmail);
}

export function* checkUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  yield takeLatest(userActionTypes.SIGN_OUT, userSignOut);
}

export function* userSagas() {
  yield all([
    call(googleSignIn),
    call(emailSignIn),
    call(checkUserSession),
    call(signOut)
  ]);
}
