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

export const userRegister = (data) => async (dispatch) => {
  const url = 'https://afternoon-castle-24666.herokuapp.com/register';
  dispatch(registerRequest());
  try {
    const result = await axios.post(url, data);

    dispatch(registerSuccess(result.data));
  } catch (error) {
    dispatch(registerFailure(error));
  }
};
