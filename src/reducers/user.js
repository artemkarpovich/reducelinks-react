import { SIGN_IN, LOGOUT, SIGN_UP } from '../actions/user';

export default function (state = {}, action) {
  switch (action.type) {
    case `${SIGN_IN}_SUCCESS`:
    case `${SIGN_UP}_SUCCESS`:  
      return {
        ...action.payload,
        loggedIn: true,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}