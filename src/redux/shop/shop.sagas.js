// Import effects from redux-saga
import { takeEvery, call, put, all } from 'redux-saga/effects';

import { ShopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailed
} from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    // use call method so you can yield and make sure to wait for code to finish running, call takes two arguments,  the function you want to call and any parameters you want to pass into that function.
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    // the put method is the saga effect for creating actions, similar to dispatch but you have to yield it. It just returns a object in this case with payload value:
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailed(error.message));
  }
};

export function* fetchCollectionsStart() {
	yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
};
