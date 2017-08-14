import React, { Component } from 'react';
import { createStore } from 'redux'
import { withQuery } from 'react-prismic';
import myApp from './State/reducers'
import Page from './Components/Page/Page';
import Header from './Components/Header/Header';
import logo from './logo.svg';
import './App.css';

let store = createStore(myApp);

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
console.log('unsubscribing the store state ', store.getState())
)

class App extends Component {

  // creating state variable to control current page and other transitions
  constructor(props) {
    super(props);
    this.state = { activePage: {} };
  }

  render() {
    // props
    const { prismicData } = this.props;

    // dispatchers
    const setActivePage = (page) => {
      this.setState({ activePage: page });
      //console.log("app state ", this.state);
    }

    // component
    return (
      <div className="App">
        <Header
          data={prismicData}
          store={store}
        />

        {/*  make a component */}
        <div className="app-content">
          <h5>content</h5>
        </div>

        {/*  make a component */}
        <div className="app-footer">
          <h5>footer</h5>
        </div>
      </div>
    );
  }
}

export default App;
