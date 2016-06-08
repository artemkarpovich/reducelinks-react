import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { logout } from '../actions/user';

const propTypes = {
  logout: PropTypes.func,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler() {
    this.props.actions.logout();
    this.props.actions.push('/signin'); 
  }

  render() {
    return (
      <div>
        <h1>Default React Project</h1>
        <button onClick={ this.logoutHandler }>logout</button>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = propTypes;

export default connect(state => ({}), dispatch => ({
  actions: bindActionCreators({
    logout,
    push
  }, dispatch)
}))(App);
