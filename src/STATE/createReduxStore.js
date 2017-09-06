import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';

// TODO we have to go back and separate the reducers
import combiningReducers from './reducers';

// routes mapping
const routesMap = {
  HOME: '/page/:slug',      // using a single template to render different content, :slug is a dynamic segment
}


// create a variable to store the createStore constants.
// pass a history variable so we can have
const createReduxStore = (history) => {
  const { reducer, middleware, enhancer } = connectRoutes( history, routesMap ); // 3 redux aspects

  // create the root reducer
  const rootReducer = combiningReducers(reducer)// combineReducers({location: reducer, pageSlug: appReducers });

  // create middleware
  // TODO figure out what to do with middleware
  const middlewares = applyMiddleware(middleware);

  // note the order: enhancer, then middlewares.
  // but be aware || we need dev tools right now
  return createStore(rootReducer, composeWithDevTools(enhancer, middlewares));
}

export default createReduxStore;
