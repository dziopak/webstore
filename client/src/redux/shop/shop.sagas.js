import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { convertCollections } from './../../utils/functions.js';
import { collectionsDidFetch, collectionsFetchFail } from './shop.actions';

import shopActionTypes from './shop.types';

export function* collectionsFetchAsync() {
  try {
    const url = `http://localhost:8000/api/v1/collections`;
    const ref = yield axios({
      url,
      method: 'get'
    });
    const { collections } = ref.data.data;
    const collections2 = yield call(convertCollections, collections);
    yield put(collectionsDidFetch(collections2));
  } catch (err) {
    yield put(collectionsFetchFail(err.message));
  }
}

export function* collectionsFetch() {
  yield takeLatest(shopActionTypes.COLLECTIONS_FETCH, collectionsFetchAsync);
}
