import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

if (module.hot) {
  module.hot.accept();
}

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));
