import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userRegistrationReducer from './user/userRegisterReducer';

const store = createStore(userRegistrationReducer, applyMiddleware(thunk));

export default store;
