'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import onsenui from 'onsenui';
import {
  Page,
  Button
} from 'react-onsenui';

class App extends React.Component {
  handleClick() {
    onsenui.notification.alert({message: 'Hello world!'});
  }

  render() {
    return (
        <Page>
        <Button onClick={this.handleClick}>Push!</Button>
        </Page>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
