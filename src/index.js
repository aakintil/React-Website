import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Prismic from './COMPONENTS/Prismic/Prismic';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Prismic />, document.getElementById('root'));
registerServiceWorker();
