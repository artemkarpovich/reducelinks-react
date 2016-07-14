import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';
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
    this.props.actions.push('/index');
  }

  render() {
    const name = this.props.user.name ? this.props.user.name : undefined;
    return (
      <div>
        <h1>REDUCE LINKS</h1>
        {
          name ?
            <div>
              <button onClick={ this.logoutHandler }>logout</button>
              <Link to="/links-info">{name}</Link>
            </div> : ''
        }
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = propTypes;

export default connect(state => ({
  user: state.user,
}), dispatch => ({
  actions: bindActionCreators({
    logout,
    push
  }, dispatch)
}))(App);
