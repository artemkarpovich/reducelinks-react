import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import routes from './routes';
import reducers from './reducers';
import api from './middlewares/api';
import { setNextPathname } from './actions/user';
import './styles/main.scss';

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

const store = createStore(reducers, { user }, compose(
    applyMiddleware(
      thunk,
      api(),
      routerMiddleware(browserHistory)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(() => {
  localStorage.setItem('user', JSON.stringify(store.getState().user));
});

function ensureAuthenticated(nextState, replaceState) {
  const user = store.getState().user;
  if (!user.loggedIn) {
    store.dispatch(setNextPathname(nextState.location.pathname));
    replaceState({}, '/authorization');
  }
}

ReactDom.render(
  <Provider store={store}>
    <Router history={history} routes={routes(ensureAuthenticated)} />
  </Provider>,
  document.getElementById('app')
);
