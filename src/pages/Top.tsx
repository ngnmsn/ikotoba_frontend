import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import Login from './Login';
import Home from './Home';

function Top() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div>
      {!session ? <Login /> : <Home />}
    </div>
  )
}

export default Top;