import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import * as utils from './utils';
import global from './global';
import auth from '../authentication/reducer';
import * as User from '../actions/user';

const userinfo = utils.createReduce(User.GET_USER);

const rootReducer = combineReducers({
  global,
  auth,
  router,
  userinfo
});

export default rootReducer;
