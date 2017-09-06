import { combineReducers } from 'redux';

// Import your state reducer modules and add them to the root reducer
import initialReducer from './reducers/initial';
import dataRetrievedReducer from './reducers/dataRetrieved';
import pageReducers from './reducers/page';


const combiningReducers = ( reduxReducer ) => {
  return combineReducers({
    location: reduxReducer,
    initialReducer,
    dataRetrievedReducer,
    pageReducers
  })
};

export default combiningReducers;
