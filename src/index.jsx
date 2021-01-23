import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

ReactDOM.render(
  <Provider
    store={createStore(reducers, composeWithDevTools(applyMiddleware()))}
  >
    <App />
  </Provider>,
  document.querySelector('#root')
);
