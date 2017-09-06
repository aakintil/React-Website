import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import createReduxStore from './STATE/createReduxStore';

// Create the history object
const history = createHistory();

const store = createReduxStore(history);

console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
