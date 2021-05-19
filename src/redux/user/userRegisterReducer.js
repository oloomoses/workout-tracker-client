import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './userTypes';

const initialState = {
  loading: false,
  user: {},
  token: localStorage.getItem('auth_token'),
  username: localStorage.getItem('workoutUser'),
  error: '',
};

const userRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        token: localStorage.setItem('auth_token', action.payload.token),
        username: localStorage.setItem('workoutUser', action.payload.name),
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userRegistrationReducer;
