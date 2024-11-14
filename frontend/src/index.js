import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Only one Router

import App from './App';

ReactDOM.render(
  <Router> {/* Wrap only once */}
    <App />
  </Router>,
  document.getElementById('root')
);
