import userActionTypes from "./user.types";

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignIn = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN
});

export const emailSignIn = userData => ({
  type: userActionTypes.EMAIL_SIGN_IN,
  payload: userData
});

export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFail = error => ({
  type: userActionTypes.SIGN_IN_FAIL,
  payload: error
});

export const signOut = () => ({
  type: userActionTypes.SIGN_OUT
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFail = error => ({
  type: userActionTypes.SIGN_OUT_FAIL,
  payload: error
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});

export default setCurrentUser;
