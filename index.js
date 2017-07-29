'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import onsenui from 'onsenui';
import {
  Page,
  Navigator,
  Toolbar,
  List,
  ListItem
} from 'react-onsenui';

import PageExample from './examples/Page';
import BackButtonExample from './examples/BackButton';
import BottomToolbarExample from './examples/BottomToolbar';

class Examples extends React.Component {
  constructor(props) {
    super(props);

    this.state = {class: 'test'};
    this.getExamples = this.getExamples.bind(this);
  }

  getExamples() {
    return [
      {
        title: 'Bottom Toolbar',
        component: BottomToolbarExample,
      }, {
        title: 'Page',
        component: PageExample
      }, {
        title: 'Back Button',
        component: BackButtonExample
      }
    ]
  }

  goto(example) {
    this.props.navigator.pushPage({
      component: example.component,
      props: {
        key: example.title
      }
    });
  }

  render() {
    return (
        <Page style={{background: 'green'}}
      renderToolbar={() => <Toolbar><div className='center'> Up Toolbar </div></Toolbar>}
        >
        <List modifier='inset'
      dataSource={this.getExamples()}
      renderHeader={() =>
          <ListItem lockOnDrag style={{background: 'green'}} tappable tap-background-color='red'> HEADER </ListItem>
      }
      renderRow={(example) =>
          <ListItem key={example.title} onClick={this.goto.bind(this, example)}>{example.title}</ListItem>
      }
        />
        </Page>
    );
  }
}

class App extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, route.props);
  }

  render() {
    return (
        <Navigator
      renderPage={this.renderPage}
      onPrePush={(e) => console.log('prepush', e)}
      onPostPush={(e) => console.log('postpush', e)}
      onPrePop={(e) => console.log('prepot', e)}
      onPostPop={(e) => console.log('postpop', e)}
      initialRoute={{
        component: Examples,
        props: {
          key: 'examples'
        }
      }}
      />
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
