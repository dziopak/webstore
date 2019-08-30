import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrl =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrl] : null)
  );

export const selectCollectionsArray = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
