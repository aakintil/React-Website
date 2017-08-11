import React, { Component } from 'react';
import { createStore } from 'redux'
import myApp from './State/reducers'
import Header from './Components/Header/Header';
import logo from './logo.svg';
import { withQuery } from 'react-prismic';
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
    const { prismic } = this.props;
    const setActivePage = (page) => {
      this.setState({ activePage: page });
      console.log("app state ", this.state);
    }
    return (
      <div className="App">
        { prismic.results &&
          <Header
            data={this.props.prismic.results}
            setActivePage={setActivePage}
            store={store}
          />
        }
        <div className="app-content">

        </div>

        <div className="app-footer">

        </div>
      </div>
    );
  }
}

export default withQuery({
  url: 'https://aderinsola.prismic.io/api',
  query: ["", {}]
})(App);
