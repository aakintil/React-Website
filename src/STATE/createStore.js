import { createStore as _createStore, applyMiddleware, componse } from 'redux';
import createHistory from 'history/createBrowserHistory';
import appReducers from '../reducers';


const _history = createHistory();

// routes mapping
const routesMap = {
  HOME: '/page/:slug',      // action <-> url path
}


// create a variable to store the createStore constants.
// pass a history variable so we can have
const createStore = ( history, client, data ) => {
  // use redux first router to create history
  history = _history;

  let finalCreateStore;

  if ( __DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__ ) {
    const { persistState } = require('redux-devtools');
    const emptyFn = fn => fn;

    if ( !window.devToolsExtention) {
      console.debug('Download the Redux DevTools for a better development experience');
    }

    finalCreateStore = compose(
      {},
      window.devToolsExtention ?  window.devToolsExtention() : emptyFn,
      persistState( window.location.href.match(/[?&debug_session=([^&]+)\b/))
    )(_createStore);

  }
  else {
    // dunno what to do here yet
  }

  const reducers = require('./reducers');
  const store = finalCreateStore(reducers, data);

  if ( __DEVELOPMENT__ && moduel.hot ) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'));
    })
  }

  return store;
}

export default createStore;
