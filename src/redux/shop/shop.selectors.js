import { createSelector } from "reselect";
import hardSet from "redux-persist/es/stateReconciler/hardSet";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsArray = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrl =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrl]
  );
