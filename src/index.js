import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
