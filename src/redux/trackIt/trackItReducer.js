import {
  GET_REQUEST,
  POST_REQUEST,
  SET_LOADING,
} from './types';

const initialState = {
  trackIts: [],
  loading: false,
  message: '',
};

const trackItReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        trackIts: action.payload,
        loading: false,
      };
    case POST_REQUEST:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default trackItReducer;
