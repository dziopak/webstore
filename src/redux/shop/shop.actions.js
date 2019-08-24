import shopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnap
} from "./../../firebase/firebase.utils";

export const collectionsFetch = () => ({
  type: shopActionTypes.COLLECTIONS_FETCH
});

export const collectionsDidFetch = collections => ({
  type: shopActionTypes.COLLECTIONS_DID_FETCH,
  payload: collections
});

export const collectionsFetchFail = errorMsg => ({
  type: shopActionTypes.COLLECTIONS_FETCH_FAIL,
  payload: errorMsg
});

export const collectionsFetchAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(collectionsFetch);

    collectionRef
      .get()
      .then(snapshot => {
        const collections = convertCollectionsSnap(snapshot);
        dispatch(collectionsDidFetch(collections));
      })
      .catch(err => dispatch(collectionsFetchFail(err.message)));
  };
};
