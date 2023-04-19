import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Login from './pages/Login';
import Home from './pages/Home';
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
  const [session, setSession] = useState<any>(null);
  const [userId, setUserId] = useState<string|null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session!=null){
        setUserId(session.user.id)
      }
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session!=null){
        setUserId(session.user.id)
      }
    })

  }, [session, userId])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={session ? <Navigate replace to='/home'/> : <Login />}></Route>
          <Route path='/home' element={session ? <Home userId={userId}/> : <Navigate replace to='/'/>}></Route>
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
