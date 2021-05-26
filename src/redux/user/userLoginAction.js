import axios from 'axios';
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

export const userLogin = (userData) => async (dispatch) => {
  const urlData = 'https://afternoon-castle-24666.herokuapp.com/auth/login';
  dispatch(userLoginRequest());
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(urlData, userData, axiosConfig.headers);
    dispatch(userLoginSuccess(res.data));
    window.location.href = '/';
  } catch (error) {
    dispatch(userLoginFailure(error));
  }
};
