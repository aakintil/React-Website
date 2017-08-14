import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PrismicWrapper from './Components/Prismic/PrismicWrapper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
