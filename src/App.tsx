import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
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
import QRCodeForGroupJoin from './pages/QRCodeForGroupJoin';
import GroupJoin from './pages/GroupJoin';
import './App.css';

const oneSignalAppId = process.env.REACT_APP_ONESIGNAL_APP_ID!

function App() {
  const [session, setSession] = useState<any>(null);
  const [userId, setUserId] = useState<string|null>(null);
  const [oneSignalInitialized, setOneSignalInitialized] = useState<boolean>(false);
  // const location = useLocation();

  OneSignal.on('notificationDisplay', function(event) {
    console.warn('OneSignal notification displayed:', event);
  });

  const initializeOneSignal = async (uid: string) => {
    if (oneSignalInitialized) {
      return
    }
    setOneSignalInitialized(true)
    if (process.env.NODE_ENV === 'development') {
      OneSignal.init({
        appId: oneSignalAppId,
        notifyButton: {
          enable: true,
        },
        serviceWorkerParam: { scope: '/ikotoba_frontend/' },
        serviceWorkerPath: 'ikotoba_frontend/OneSignalSDKWorker.js',
        allowLocalhostAsSecureOrigin: true,
      })
    } else if (process.env.NODE_ENV === 'production') {
      OneSignal.init({
        appId: oneSignalAppId,
        notifyButton: {
          enable: true,
        },
        serviceWorkerParam: { scope: '/ikotoba_frontend/' },
        serviceWorkerPath: 'ikotoba_frontend/OneSignalSDKWorker.js',
      })
    }
    await OneSignal.setExternalUserId(uid)
  }

  const RedirectLogin = () => {
    const location = useLocation();
    return <Navigate to='/login' state={{from: location}} replace/>
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
  }, [userId])

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/login' element={session ? <Navigate replace to='/home'/> : <Login />}></Route>
          <Route path='/' element={session ? <Navigate replace to='/home'/> : <RedirectLogin />}></Route>
          <Route path='/home' element={session ? <Home userId={userId}/> : <RedirectLogin />}></Route>
          <Route path='/group/:groupId' element={session ? <Group /> : <RedirectLogin />}></Route>
          <Route path='/talk_session/:talkSessionId' element={session ? <TalkSession userId={userId}/> : <RedirectLogin />}></Route>
          <Route path='/secret_word_setting/:groupId' element={session ? <SecretWordSetting /> : <RedirectLogin />}></Route>
          <Route path='/secret_word_edit' element={session ? <SecretWordEdit userId={userId}/> : <RedirectLogin />}></Route>
          <Route path='/secret_word_add/:groupId' element={session ? <SecretWordAdd userId={userId} /> : <RedirectLogin />}></Route>
          <Route path='/group_add' element={session ? <GroupAdd userId={userId} /> : <RedirectLogin />}></Route>
          <Route path='/group_edit/:groupId' element={session ? <GroupEdit /> : <RedirectLogin />}></Route>
          <Route path='/talk_session_add/:groupId' element={session ? <TalkSessionAdd /> : <RedirectLogin />}></Route>
          <Route path='/talk_session_edit/:talkSessionId' element={session ? <TalkSessionEdit /> : <RedirectLogin />}></Route>
          <Route path='/qrcode_group_join/:groupId' element={session ? <QRCodeForGroupJoin /> : <RedirectLogin />}></Route>
          <Route path='/group_join/:groupId' element={session ? <GroupJoin userId={userId}/> : <RedirectLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
