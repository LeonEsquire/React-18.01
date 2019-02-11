import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './app/store';

import Layout from './app/components/Layout';

const app = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
    <Layout />
  </Provider>, 
  app);