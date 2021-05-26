import { combineReducers } from 'redux';
import userRegisterReducer from './user/userRegisterReducer';
import userLoginReducer from './user/userLoginReducer';

const rootReducer = combineReducers({
  login: userLoginReducer,
  signup: userRegisterReducer,
});

export default rootReducer;
