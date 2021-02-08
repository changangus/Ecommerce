import { ShopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const { FETCH_COLLECTIONS_FAILED, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } = ShopActionTypes;

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START,
  }
};

export const fetchCollectionsSuccess = collectionsMap => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  }
};

export const fetchCollectionsFailed = (message) => {
  return {
    type: FETCH_COLLECTIONS_FAILED,
    errorMessage: message
  }
};

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    
		collectionRef.get().then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));  
		}).catch(error => dispatch(fetchCollectionsFailed(error.message)))
  }
};