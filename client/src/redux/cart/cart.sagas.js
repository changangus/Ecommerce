import { takeLatest, all, call, put } from 'redux-saga/effects';
import UserActionsType from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignout() {
  yield put(clearCart());
}; 

export function* onSignOutSuccess() {
  yield takeLatest(UserActionsType.SIGNOUT_SUCCESS, clearCartOnSignout);
};

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
};