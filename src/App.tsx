import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from './pages/Top';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Group from './pages/Group';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/group' element={<Group />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
