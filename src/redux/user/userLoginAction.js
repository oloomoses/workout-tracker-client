import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './userTypes';

export const userLoginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const userLoginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const userLoginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
