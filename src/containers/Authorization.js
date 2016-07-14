import React, { Component } from 'react';
import { Link } from 'react-router';
import SignIn from '../containers/SignIn';

class Authorization extends Component {
  render() {
    return (
      <div>
        <SignIn />
        <Link to="signup">Sign Up</Link>
      </div>
    );
  }
}

export default Authorization;
