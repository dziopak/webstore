import { takeLatest, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnap
} from "./../../firebase/firebase.utils";
import { collectionsDidFetch, collectionsFetchFail } from "./shop.actions";

import shopActionTypes from "./shop.types";

export function* collectionsFetchAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collections = yield call(convertCollectionsSnap, snapshot);
    yield put(collectionsDidFetch(collections));
  } catch (err) {
    yield put(collectionsFetchFail(err.message));
  }
}

export function* collectionsFetch() {
  yield takeLatest(shopActionTypes.COLLECTIONS_FETCH, collectionsFetchAsync);
}
