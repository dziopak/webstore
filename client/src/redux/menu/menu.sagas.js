import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { firestore } from './../../firebase/firebase.utils';
import { positionsDidFetch, positionsFetchFail } from './menu.actions';

import menuActionTypes from './menu.types';
const url = `http://localhost:8000/api/v1/menus`;

export function* positionsFetchAsync() {
  try {
    const ref = yield axios({
      url,
      method: 'get'
    });
    const { data } = ref.data;
    const result = yield data.menus.map(doc => {
      const { _id, name, menus, location } = doc;

      return {
        routeName: encodeURI(name.toLowerCase()),
        id: _id,
        name,
        location,
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
  yield takeLatest(menuActionTypes.POSITIONS_FETCH, positionsFetchAsync);
}
