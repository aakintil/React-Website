import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrismicWrapper from './Components/Prismic/PrismicWrapper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PrismicWrapper/>, document.getElementById('root'));
registerServiceWorker();
