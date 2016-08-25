/**
 * Created by xuemingli on 16/5/25.
 */
import {UNAUTHORIZED, FORBIDDEN} from '../middleware/api';

const initialState = {
  isAuthenticated: true,
  forbidden: false
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case UNAUTHORIZED:
      return Object.assign({}, state, {isAuthenticated: false});
    case FORBIDDEN:
      return Object.assign({}, state, {forbidden: true});
    default:
      return initialState;
  }
}
