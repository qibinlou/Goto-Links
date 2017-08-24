import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {

  static propTypes = {
    url: PropTypes.string.isRequired,
    service: PropTypes.object.isRequired
  };

  handleKeyPress = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    const { url, service } = this.props;
    const linkName = this.refs.linkName.value;
    service.set('go/' + linkName, url);
    console.log(`Created go/${linkName} for ${url}`);
  };

  render() {
    const { url } = this.props;
    return (
      <div className="container">
        <h2>Goto Links</h2>
        <div>
          <div>
            <span>URL:</span>
            <span>{url}</span>
          </div>
          <div>
            <span>go/</span>
            <input type="text" ref="linkName" onKeyPress={this.handleKeyPress} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
