import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { sendLinkInfo, addLinkInfo } from '../actions/link';

const propTypes = {
  actions: PropTypes.shape({
    sendLinkInfo: PropTypes.func,
    addLinkInfo: PropTypes.func,
  })
};

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLink: '',
      description: '',
      tags: ''
    };

    this.sendLinkInfoHandler = this.sendLinkInfoHandler.bind(this);
  }

  changeLinkValue(key) {
    return (e) => {
      const value = e.target.value;
      this.setState({
        [key]: value
      });
    }
  }

  sendLinkInfoHandler(e) {
    const { initialLink, description, tags } = this.state;
    const name = this.props.user.name ? this.props.user.name : undefined;

    e.preventDefault();

    if (name) {
      this.props.actions.sendLinkInfo(initialLink, description, tags)
        .then((action) => {
          this.setState({
            initialLink: '',
            description: '',
            tags: ''
          });
          this.props.actions.addLinkInfo(action.payload.link);
        })
    } else {
      this.props.actions.push('/authorization');
    }
  }

  render() {
    const { initialLink, description, tags } = this.state;
    const link = this.props.link;
    return (
      <div>
        <form onSubmit={this.sendLinkInfoHandler}>
          <input
            placeholder="initialLink"
            onChange={this.changeLinkValue('initialLink')}
            value={initialLink}
          />
          <input
            placeholder="description"
            onChange={this.changeLinkValue('description')}
            value={description}
          />
          <input
            placeholder="tags"
            onChange={this.changeLinkValue('tags')}
            value={tags}
          />
          <button>give</button>
        </form>
        {
          link.shortLink ?
            <a href={`http://localhost:3000/redirect/${link.shortLink}`}>
              http://localhost:3000/redirect/{link.shortLink}
            </a> : ''
        }
      </div>
    );
  }
}

Index.propTypes = propTypes;

export default connect(state => ({
  link: state.link,
  user: state.user,
}), dispatch => ({
  actions: bindActionCreators({
    sendLinkInfo,
    addLinkInfo,
    push,
  }, dispatch)
}))(Index);
