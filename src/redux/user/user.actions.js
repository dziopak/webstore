import userActionTypes from "./user.types";

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignIn = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN
});

export const googleSignInSuccess = user => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFail = error => ({
  type: userActionTypes.GOOGLE_SIGN_IN_FAIL,
  payload: error
});

export const emailSignIn = userData => ({
  type: userActionTypes.EMAIL_SIGN_IN,
  payload: userData
});

export const emailSignInSuccess = user => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFail = error => ({
  type: userActionTypes.EMAIL_SIGN_IN_FAIL,
  payload: error
});

export default setCurrentUser;
