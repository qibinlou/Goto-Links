/* @flow */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LinksTable from './components/LinksTable';

import './App.css';

type Props = {
  +url: string,
  +service: Object
};

class App extends Component<Props> {

  handleKeyPress = (e: Event) => {
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
    const links = [
      {
        namespace: 'go',
        url: 'https://google.com',
        shortName: 'gg'
      }
    ];
    return (
      <div className="container">
        <div className="app">
          <h2>Goto Links</h2>
          <div>
            <div>
              <span>URL:</span>
              <span>{url}</span>
            </div>
            <div>
              <span>go/</span>
              <input type="text" ref="linkName" onKeyPress={this.handleKeyPress} />
              <RaisedButton label="Create" />
            </div>
          </div>

          <div className="links-table">
            <LinksTable links={links} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
