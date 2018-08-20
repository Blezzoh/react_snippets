import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HiddenMessages from './components/hidden-messages';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HiddenMessages />, document.getElementById('root'));
registerServiceWorker();
