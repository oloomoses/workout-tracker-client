import {
  GET_WORKOUT_REQUEST,
  GET_WORKOUT_SUCCESS,
  GET_WORKOUT_FAILURE,
} from './types';

const initialState = {
  loading: false,
  workouts: [],
  error: '',
};

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_WORKOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        workouts: action.payload,
      };

    case GET_WORKOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default workoutReducer;
