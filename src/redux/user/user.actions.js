import UserActionsType from './user.types';

export const setCurrentUser = (user) => {
  return {
    type: UserActionsType.SET_CURRENT_USER,
    payload: user
  }
};

export const googleSignInStart = () => {
  return {
    type: UserActionsType.GOOGLE_SIGNIN_START
  }
};

export const signInSuccess = (user) => {
  return {
    type: UserActionsType.SIGNIN_SUCCESS,
    payload: user
  }
};

export const signInFailure = (error) => {
  return {
    type: UserActionsType.SIGNIN_FAILURE,
    payload: error
  }
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: UserActionsType.EMAIL_SIGNIN_START,
    payload: emailAndPassword
  }
};

export const checkUserSession = () => {
  return {
    type: UserActionsType.CHECK_USER_SESSION
  }
};

export const signOutStart = () => {
  return {
    type: UserActionsType.SIGNOUT_START
  }
};

export const signOutSuccess = () => {
  return {
    type: UserActionsType.SIGNOUT_SUCCESS
  }
};

export const signOutFailure = (error) => {
  return {
    type: UserActionsType.SIGNOUT_FAILURE,
    payload: error
  }
};

export const signUpStart = (userCredentials) => {
  return {
    type: UserActionsType.SIGNUP_START,
    payload: userCredentials
  }
};

export const signUpSuccess = ({ user, additionalData }) => {
  return {
    type: UserActionsType.SIGNUP_SUCCESS,
    payload: { user, additionalData }
  }
};

export const signUpFailure = (error) => {
  return {
    type: UserActionsType.SIGNUP_FAILURE,
    payload: error
  }
};