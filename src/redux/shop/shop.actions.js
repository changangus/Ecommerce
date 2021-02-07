import { ShopActionTypes } from './shop.types';

const { UPDATE_COLLECTIONS } = ShopActionTypes;

export const updateCollections = (collection) => {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collection,
  }
}