import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import link from './link';
import links from './links';
import linksByTag from './linksByTag';

export default combineReducers({
  routing: routerReducer,
  user,
  link,
  links,
  linksByTag
});
