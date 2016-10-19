import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './containers/root/root';
import store from './redux/story';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app') // eslint-disable-line no-undef
);
