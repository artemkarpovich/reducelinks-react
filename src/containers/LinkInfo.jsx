import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLinksInfo } from '../actions/link';

const propTypes = {
  actions: PropTypes.shape({
    getLinksInfo: PropTypes.func,
  }),
};

class LinkInfo extends Component {
  
  componentDidMount() {
    this.props.actions.getLinksInfo();  
  }
  
  render() {
    const { links } = this.props;
    return (
      <div>
        <h1>Links Info</h1>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>InitialLink</th>
              <th>ShortLink</th>
              <th>Description</th>
              <th>CountTransitions</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {
              links.map((link, index) => <tr key={index}>
                <td>{index === 0 ? link.author : ''}</td>
                <td>{link.initialLink}</td>
                <td>{link.shortLink}</td>
                <td>{link.description}</td>
                <td>{link.countTransitions}</td>
                <td>
                  {
                    link.tags ?
                      link.tags.map((tag, index) =>
                        <a key={index} href={`http://localhost:3000/tags/${tag}`}>
                          #{tag}
                        </a>
                      ) :
                      'No tags'
                  }
                </td>
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
  links: state.links,
}), dispatch => ({
  actions: bindActionCreators({
    getLinksInfo,
  }, dispatch),
}))(LinkInfo);
