import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

import { firestore } from '../../firebase/firebase.utils';
import { bestsellersDidFetch, bestsellersFetchFail } from './rankings.actions';

import rankingsActionTypes from './rankings.types';

const url = `http://localhost:8000/api/v1/items`;
export function* bestsellersFetchAsync() {
  try {
    const ref = yield axios({
      url: `${url}?limit=5&sort=-salesCount`,
      method: 'get'
    });
    const { data } = ref.data;
    yield put(bestsellersDidFetch(data.items));
  } catch (err) {
    yield put(bestsellersFetchFail(err.message));
  }
}

export function* bestsellersFetch() {
  yield takeLatest(
    rankingsActionTypes.BESTSELLERS_FETCH,
    bestsellersFetchAsync
  );
}
