import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: true,
  errorMessage: undefined,
};

const { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILED } = ShopActionTypes;

export const shopReducer = (state= INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      }
    case FETCH_COLLECTIONS_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
};