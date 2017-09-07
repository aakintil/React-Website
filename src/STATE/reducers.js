import { combineReducers } from 'redux';
import { NOT_FOUND } from "redux-first-router";
import { Record } from "immutable";

// Import your state reducer modules and add them to the root reducer
import initialReducer from './reducers/initial';
import dataRetrievedReducer from './reducers/dataRetrieved';
import pageReducers from './reducers/page';

const Model = new Record({
  pageSlug: undefined
});

const init = () => {
  return new Model({ pageSlug: undefined });
}

const reducers = ( state = init(), action = {} ) => {
  switch (action.type) {
    case 'HOME':
      return state.setIn(['pageSlug'], action.payload.slug);

    case NOT_FOUND:
      return null;

    default:
      return state;
  }
}

//
// const combiningReducers = ( reduxReducer ) => {
//   return combineReducers({
//     location: reduxReducer,
//     initialReducer,
//     dataRetrievedReducer,
//     pageReducers
//   })
// };
//
// export default combiningReducers;

export default reducers;
