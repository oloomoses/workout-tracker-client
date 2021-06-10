import axios from 'axios';
import {
  GET_REQUEST,
  POST_REQUEST,
  PUT_REQUEST,
  DELETE_REQUEST,
  SET_LOADING,
} from './types';

export const getRequest = (data) => ({
  type: GET_REQUEST,
  payload: data,
});

export const postRequest = (data) => ({
  type: POST_REQUEST,
  payload: data,
});

export const putRequest = (data) => ({
  type: PUT_REQUEST,
  payload: data,
});

export const deleteRequest = (data) => ({
  type: DELETE_REQUEST,
  payload: data,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const trackIts = (id) => async (dispatch) => {
  const url = `https://afternoon-castle-24666.herokuapp.com//workouts/${id}/track_its`;
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setLoading());

  const res = await axios.get(url, axiosConfig.headers);
  dispatch(getRequest(res.data));
};

export const postTrackIt = (id, formData) => async (dispatch) => {
  const url = `https://afternoon-castle-24666.herokuapp.com//workouts/${id}/track_its`;
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setLoading());

  const res = await axios.post(url, formData, axiosConfig.headers);
  dispatch(trackIts(res.data));
  window.location.href = `/workouts/${id}`;
};
