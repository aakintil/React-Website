import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { withQuery } from 'react-prismic';

import App from '../App/App';
import createHistory from 'history/createBrowserHistory';
import createReduxStore from '../../STATE/createReduxStore';


// Create the history object
const history = createHistory();

// Create our global store
const store = createReduxStore(history);

// -- PRISMIC COMPONENT CLASS
class Prismic extends Component {

  render() {
    const { prismic } = this.props;

    // set the initial state once we've gotten data
    const loading = false;

    // (prismic.results !== undefined) ?  store.dispatch(
    //   {
    //     type: 'HOME',
    //     payload: { slug: 'about' },
    //     data: prismic.results
    //   }) : '';

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
  })(Prismic);
