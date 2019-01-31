import React from 'react';
import ReactDOM from 'react-dom';

import data from './data'

import App from 'app';

import 'bootstrap/scss/bootstrap.scss';

ReactDOM.render(<App {...data} />, document.getElementById('app'));