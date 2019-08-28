import { takeEvery, call, put } from "redux-saga/effects";

import { firestore } from "../../firebase/firebase.utils";
import { bestsellersDidFetch, bestsellersFetchFail } from "./rankings.actions";

import rankingsActionTypes from "./rankings.types";

export function* bestsellersFetchAsync() {
  try {
    const collectionRef = firestore.collection("bestsellers");
    const snapshot = yield collectionRef.orderBy("id", "asc").get();
    const result = snapshot.docs.map(doc => {
      return doc.data();
    });
    yield put(bestsellersDidFetch(result));
  } catch (err) {
    yield put(bestsellersFetchFail(err.message));
  }
}

export function* bestsellersFetch() {
  yield takeEvery(rankingsActionTypes.BESTSELLERS_FETCH, bestsellersFetchAsync);
}
