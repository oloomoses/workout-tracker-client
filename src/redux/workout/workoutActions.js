import axios from 'axios';
import {
  GET_WORKOUT_REQUEST,
  GET_WORKOUT_SUCCESS,
  GET_WORKOUT_FAILURE,
} from './types';

export const getWorkoutRequest = () => ({
  type: GET_WORKOUT_REQUEST,
});

export const getWorkoutSuccess = (data) => ({
  type: GET_WORKOUT_SUCCESS,
  payload: data,
});

export const getWorkoutFailure = (error) => ({
  type: GET_WORKOUT_FAILURE,
  payload: error,
});

export const workouts = () => async (dispatch) => {
  const url = 'https://afternoon-castle-24666.herokuapp.com/workouts';
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(getWorkoutRequest);

  try {
    const res = await axios.get(url, axiosConfig.headers);
    console.log(res.data);
  } catch (error) {
    dispatch(getWorkoutFailure);
  }
};
