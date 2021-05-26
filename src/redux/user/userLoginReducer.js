import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './userTypes';

const initialState = {
  loading: false,
  token: sessionStorage.getItem('token'),
  message: '',
  error: '',
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: sessionStorage.setItem('token', action.payload.auth_token),
        message: action.payload.message,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default userLoginReducer;
