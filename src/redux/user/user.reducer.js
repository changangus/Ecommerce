import UserActionsType from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionsType.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionsType.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case UserActionsType.SIGNIN_FAILURE:
    case UserActionsType.SIGNOUT_FAILURE:
    case UserActionsType.SIGNUP_FAILURE:
        return {
          ...state,
          error: action.payload
        }
    default:
      return state;
  }
};

export default userReducer;