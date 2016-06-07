import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Default React Project</h1>
        { this.props.children }
      </div>
    );
  }
}

export default App;
