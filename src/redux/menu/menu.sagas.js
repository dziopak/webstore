import { takeEvery, call, put } from "redux-saga/effects";

import { firestore } from "./../../firebase/firebase.utils";
import { positionsDidFetch, positionsFetchFail } from "./menu.actions";

import menuActionTypes from "./menu.types";

export function* positionsFetchAsync() {
  try {
    const collectionRef = firestore.collection("menu-positions");
    const snapshot = yield collectionRef.get();
    const result = yield snapshot.docs.map(doc => {
      const { name, menus } = doc.data();

      return {
        routeName: encodeURI(name.toLowerCase()),
        id: doc.id,
        name,
        menus
      };
    });
    yield put(positionsDidFetch(result));
  } catch (err) {
    yield put(positionsFetchFail(err.message));
  }
}

export function* positionsFetch() {
  console.log(menuActionTypes.POSITIONS_FETCH);
  yield takeEvery(menuActionTypes.POSITIONS_FETCH, positionsFetchAsync);
}
