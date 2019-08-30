import shopActionTypes from "./shop.types";

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
