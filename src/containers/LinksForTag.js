import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLinksByTag } from '../actions/link';

class LinkForTag extends Component {
  
  componentDidMount() {
    this.props.actions.getLinksByTag(this.props.params.tag);  
  }
  
  render() {
    const { linksByTag } = this.props;
    return (
      <div>
        <h1>Links by tag {this.props.params.tag}</h1>
        <table>
          <thead>
          <tr>
            <th>Author</th>
            <th>InitialLink</th>
            <th>ShortLink</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          {
            linksByTag.map((link, index) => <tr key={index}>
                <td>{link.author}</td>
                <td>{link.initialLink}</td>
                <td>{link.shortLink}</td>
                <td>{link.description}</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(state => ({
  linksByTag: state.linksByTag,
}), dispatch => ({
  actions: bindActionCreators({
    getLinksByTag,
  }, dispatch),
}))(LinkForTag);
