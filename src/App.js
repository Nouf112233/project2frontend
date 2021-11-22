import React from 'react';
import { Route, Routes } from 'react-router';
// import {Router,Route} from 'react-router-dom'
import './App.css';
import Header from './component/Header';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>

      
    </div>
  );
}

export default App;
