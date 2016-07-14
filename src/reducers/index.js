import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import link from './link';
import links from './links';


export default combineReducers({
  routing: routerReducer,
  user,
  link,
  links
});
