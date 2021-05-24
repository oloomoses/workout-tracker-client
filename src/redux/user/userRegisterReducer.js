import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './userTypes';

const initialState = {
  loading: false,
  user: {},
  token: sessionStorage.getItem('token'),
  message: '',
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
        token: sessionStorage.setItem('token', action.payload.auth_token),
        message: action.payload.message,
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
