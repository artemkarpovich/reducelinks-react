import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/App';
import Index from './containers/Index';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import LinkInfo from './containers/LinkInfo';
import LinksForTag from './containers/LinksForTag';
import Authorization from './containers/Authorization';

export default function(ensureAuthenticated) {
  return (
    <Route>
      <Route path="signup" component={SignUp} />
      <Route path="authorization" component={Authorization}/>

      <Route path="/" component={App} onEnter={ensureAuthenticated}>
        <IndexRedirect to="index" />

        <Route path="index" component={Index} />
        <Route path="links-info" component={LinkInfo} />
        <Route path="tags/:tag" component={LinksForTag} />
        
      </Route>
    </Route>
  );
}
