import { SHOP_DATA } from "../../pages/shop/shop.data";
import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const { UPDATE_COLLECTIONS } = ShopActionTypes;

export const shopReducer = (state= INITIAL_STATE, action) => {
  switch(action.type){
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      }
    default:
      return state
  }
}