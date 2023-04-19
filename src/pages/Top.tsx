import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import Login from './Login';
import Home from './Home';

function Top() {
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
    <div>
      {!session ? <Login /> : <Home userId={userId}/>}
    </div>
  )
}

export default Top;