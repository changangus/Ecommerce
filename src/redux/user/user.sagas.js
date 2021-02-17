import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionsType from './user.types';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpFailure,
	signUpSuccess
} from './user.actions';

function* getSnapshotFromUserAuth(userAuth, additonalData) {
	try {
		console.log(userAuth, additonalData);
		const userRef = yield call(createUserProfileDocument, userAuth, additonalData);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error));
	}
}

export function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(signUpSuccess({ user, additionalData: { displayName } }));
	} catch (error) {
		yield put(signUpFailure(error));
	}
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
	yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionsType.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(UserActionsType.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionsType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
	yield takeLatest(UserActionsType.SIGNOUT_START, signOut);
}

export function* onSignUpStart() {
	yield takeLatest(UserActionsType.SIGNUP_START, signUp);
}

export function* onSignUpSuccess() {
	yield takeLatest(UserActionsType.SIGNUP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess)
	]);
};
