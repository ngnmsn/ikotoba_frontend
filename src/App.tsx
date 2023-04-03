import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from './pages/Top';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
