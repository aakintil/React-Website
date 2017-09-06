import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';

// TODO we have to go back and separate the reducers
import appReducers from './reducers';

// routes mapping
const routesMap = {
  HOME: '/page/:slug',      // using a single template to render different content, :slug is a dynamic segment
}


// create a variable to store the createStore constants.
// pass a history variable so we can have
const createReduxStore = (history) => {
  const { reducer, middleware, enhancer } = connectRoutes( history, routesMap ); // 3 redux aspects

  // create the root reducer
  const rootReducer = combineReducers({location: reducer, pageSlug: appReducers });

  // create middleware
  // TODO figure out what to do with middleware
  const middlewares = applyMiddleware(middleware);

  // using a fallback if extensions aren't installed, then use Redux compose
  const composeEnhancers = composeWithDevTools(); 

  // note the order: enhancer, then middlewares
  return createStore(rootReducer, composeEnhancers(compose(enhancer, middlewares)));
}

export default createReduxStore;
