import { all, call } from "redux-saga/effects";

import { collectionsFetch } from "./shop/shop.sagas";
import { positionsFetch } from "./menu/menu.sagas";
import { bestsellersFetch } from "./rankings/rankings.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([
    call(collectionsFetch),
    call(positionsFetch),
    call(bestsellersFetch),
    call(userSagas)
  ]);
}
