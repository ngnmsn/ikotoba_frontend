import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from './pages/Top';
import Group from './pages/Group';
import TalkSession from './pages/TalkSession';
import SecretWordSetting from './pages/SecretWordSetting';
import SecretWordEdit from './pages/SecretWordEdit';
import SecretWordAdd from './pages/SecretWordAdd';
import GroupAdd from './pages/GroupAdd';
import GroupEdit from './pages/GroupEdit';
import TalkSessionAdd from './pages/TalkSessionAdd';
import TalkSessionEdit from './pages/TalkSessionEdit';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top />}></Route>
          <Route path='/group' element={<Group />}></Route>
          <Route path='/talk_session' element={<TalkSession />}></Route>
          <Route path='/secret_word_setting' element={<SecretWordSetting />}></Route>
          <Route path='/secret_word_edit' element={<SecretWordEdit />}></Route>
          <Route path='/secret_word_add' element={<SecretWordAdd />}></Route>
          <Route path='/group_add' element={<GroupAdd />}></Route>
          <Route path='/group_edit' element={<GroupEdit />}></Route>
          <Route path='/talk_session_add' element={<TalkSessionAdd />}></Route>
          <Route path='/talk_session_edit' element={<TalkSessionEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
