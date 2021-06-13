import { combineReducers } from 'redux';
import userRegisterReducer from './user/userRegisterReducer';
import userLoginReducer from './user/userLoginReducer';
import workoutReducer from './workout/workoutReducer';
import trackItReducer from './trackIt/trackItReducer';

const rootReducer = combineReducers({
  login: userLoginReducer,
  signup: userRegisterReducer,
  workout: workoutReducer,
  trackIt: trackItReducer,
});

export default rootReducer;
