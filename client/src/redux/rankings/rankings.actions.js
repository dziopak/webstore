import rankingsActionTypes from "./rankings.types";
import { firestore } from "./../../firebase/firebase.utils";

export const bestsellersFetch = () => ({
  type: rankingsActionTypes.BESTSELLERS_FETCH
});

export const bestsellersDidFetch = items => ({
  type: rankingsActionTypes.BESTSELLERS_DID_FETCH,
  payload: items
});

export const bestsellersFetchFail = errorMsg => ({
  type: rankingsActionTypes.BESTSELLERS_FETCH_FAIL,
  payload: errorMsg
});
