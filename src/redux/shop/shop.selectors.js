import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  paintings: 1,
  drawings: 2,
  crayons: 3,
  prints: 4,
  sketches: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
