import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { withQuery, Predicates } from 'react-prismic';
import { dataRetrieved } from '../../State/actions';
import appReducers from '../../State/reducers';
import App from '../../App';

let store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener


class PrismicWrapper extends Component {

  render() {
    const { prismic } = this.props;

    // set the initial state once we've gotten data
    const loading = false;

    // get the index page from prismic data
    let indexPage = (data) => {
      let index = {};
      data.map( function( page ) {
        if (page.slug === 'about') {
          index = page;
        }
      })
      return index;
    }
    (prismic.results !== undefined) ? store.dispatch( dataRetrieved(prismic.results, loading, indexPage(prismic.results)) ) : '';

    //   let unsubscribe = store.subscribe(() =>
    //   console.log('unsubscribing the store state ', store.getState())
    // );

    return (
      <div className="PrismicWrapper">
        {
          prismic.results &&
          // so that all children have access to store
          <Provider store={store}>
            <App prismicData={prismic.results}/>
          </Provider>
        }
        {
          // have to build a better loading screen / animation screen
          !prismic.results &&
          <h1>loading...</h1>
        }
      </div>
    );
  }
}

export default withQuery({
  url: 'https://aderinsola.prismic.io/api',
  query: ["", {}]
})(PrismicWrapper);
