import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './userTypes';

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const userRegister = (userData) => async (dispatch) => {
  const urlData = 'https://afternoon-castle-24666.herokuapp.com/signup';
  dispatch(registerRequest());
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(urlData, userData, axiosConfig.headers);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure(error));
  }
};
