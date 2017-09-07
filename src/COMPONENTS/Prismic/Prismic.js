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
    const { prismic, loading } = this.props;

      return (
        <div className="PrismicWrapper">
          {
            !loading && prismic.results &&
            // so that all children have access to store
            <Provider store={store}>
              <h5> trying to fix it... </h5>{/* <App prismicData={prismic.results}/> */}
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

  const prismicWrapper = withQuery({
    url: 'https://aderinsola.prismic.io/api',
    query: ["", {}]
  })(Prismic);


  export default prismicWrapper;
