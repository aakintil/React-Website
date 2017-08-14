import React, { Component } from 'react';
import { createStore } from 'redux'
// import myApp from './State/reducers'
// import Header from './Components/Header/Header';
import { withQuery } from 'react-prismic';

// let store = createStore(myApp);

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log('unsubscribing the store state ', store.getState())
// )

class Page extends Component {

  // creating state variable to control current page and other transitions
  constructor(props) {
    super(props);
    this.state = { activePage: {} };
  }

  render() {
    return (
      <div className="Page">
        <h1> The Page</h1>
      </div>
    );
  }
}

export default Page;
