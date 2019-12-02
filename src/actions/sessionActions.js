import { signup, login, verifySession } from '../services/auth';

export const SET_SESSION = 'SET_SESSION';
export const SET_SESSION_LOADING = 'SET_SESSION_LOADING';
export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';

export const sessionSignUp = (username, password) => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
  });
  return signup(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};

export const sessionLogin = (username, password) => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
  });
  return login(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};

export const sessionVerify = () => dispatch => {
  return verifySession()
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};
