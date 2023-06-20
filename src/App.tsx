import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import OneSignal from 'react-onesignal'
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

const oneSignalAppId = process.env.REACT_APP_ONESIGNAL_APP_ID!

function App() {
  const [session, setSession] = useState<any>(null);
  const [userId, setUserId] = useState<string|null>(null);
  const [oneSignalInitialized, setOneSignalInitialized] = useState<boolean>(false);

  OneSignal.on('notificationDisplay', function(event) {
    console.warn('OneSignal notification displayed:', event);
  });

  const initializeOneSignal = async (uid: string) => {
    if (oneSignalInitialized) {
      return
    }
    setOneSignalInitialized(true)
    await OneSignal.init({
      appId: oneSignalAppId,
      notifyButton: {
        enable: true,
      },
      serviceWorkerParam: { scope: '/ikotoba_frontend' },
      serviceWorkerPath: 'ikotoba_frontend/',
      allowLocalhostAsSecureOrigin: true,
    })

    await OneSignal.setExternalUserId(uid)
  }

  useEffect(() => {
    const initialize = async () => {
      await supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
        if (session!=null){
          setUserId(session.user.id)
          initializeOneSignal(session.user.id)
        }
      })
    }

    initialize();

    const authListener = supabase.auth.onAuthStateChange( async (_event, session) => {
      setSession(session)
      if (session!=null){
        setUserId(session.user.id)
        initializeOneSignal(session.user.id)
      }
    })

    return () => {
      authListener.data.subscription.unsubscribe()
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={session ? <Navigate replace to='/home'/> : <Login />}></Route>
          <Route path='/home' element={session ? <Home userId={userId}/> : <Navigate replace to='/'/>}></Route>
          <Route path='/group/:groupId' element={<Group />}></Route>
          <Route path='/talk_session/:talkSessionId' element={<TalkSession userId={userId}/>}></Route>
          <Route path='/secret_word_setting/:groupId' element={<SecretWordSetting />}></Route>
          <Route path='/secret_word_edit' element={<SecretWordEdit userId={userId}/>}></Route>
          <Route path='/secret_word_add/:groupId' element={<SecretWordAdd userId={userId} />}></Route>
          <Route path='/group_add' element={<GroupAdd userId={userId} />}></Route>
          <Route path='/group_edit/:groupId' element={<GroupEdit />}></Route>
          <Route path='/talk_session_add/:groupId' element={<TalkSessionAdd />}></Route>
          <Route path='/talk_session_edit/:talkSessionId' element={<TalkSessionEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
