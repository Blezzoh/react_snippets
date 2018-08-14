import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from "./components/Menu";
import data from "./data";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Menu title = "Daily Recipe" recipes={data} />, document.getElementById('root'));
registerServiceWorker();
