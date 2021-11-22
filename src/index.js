import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
 {/* <StateProvider initialState={initialState} reducer={reducer}> */}
    <App />
 {/* </StateProvider> */}
  </BrowserRouter>,
  document.getElementById('root')
);

