import { combineReducers } from 'redux';
import userRegisterReducer from './user/userRegisterReducer';
import userLoginReducer from './user/userLoginReducer';
import workoutReducer from './workout/workoutReducer';

const rootReducer = combineReducers({
  login: userLoginReducer,
  signup: userRegisterReducer,
  workouts: workoutReducer,
});

export default rootReducer;
