import React, { Component } from 'react';

import { connectRoutes } from 'redux-first-router'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { Provider } from 'react-redux';
import { withQuery } from 'react-prismic';
import { dataRetrieved } from '../../State/actions';
import appReducers from '../../State/reducers';
import App from '../../App';

// first we have to init the history
const history = createHistory();

// routes mapping
const routesMap = {
  HOME: '/page/:slug',      // action <-> url path
}

// destructure 3 redux aspects from the connectRoutes var
const {
  reducer,
  middleware,
  enhancer
} = connectRoutes(history, routesMap) // yes, 3 redux aspects


// create a rootReducer
const rootReducer = combineReducers({ location: reducer, slug: appReducers });

// init the middleware
const middlewares = applyMiddleware(middleware);

// then create the store, && pay attention to the order: enhancer, then middlewares
const store = createStore(rootReducer, compose(enhancer, middlewares));

console.log(store.getState().slug)
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// let store = createStore(
//   appReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


class PrismicWrapper extends Component {

  render() {
    const { prismic } = this.props;

    // set the initial state once we've gotten data
    const loading = false;

    // get the index page from prismic data
    let indexPage = (data) => {
      data.map((page) => {
        if (page.slug === 'about') {
          return page;
        }
        return '/';
      })
    }

    // payload type for redux

    // if we have results, then tell the app data was retrieved
    // eslint-disable-next-line
    // (prismic.results !== undefined) ? store.dispatch( dataRetrieved(prismic.results, loading, indexPage(prismic.results)) ) : '';

    (prismic.results !== undefined) ?  store.dispatch(
      {
        type: 'HOME',
        payload: { slug: 'about' },
        data: prismic.results
      }) : '';

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
