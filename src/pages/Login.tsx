import { Link } from 'react-router-dom';
import { useState } from 'react'
import { supabase } from '../supabaseClient'

import SiteTitle from '../components/SiteTitle';

function Login() {
  const [loading, setLoading] = useState(false)
  const [mailAddress, setEmail] = useState('')

  const handleLogin = async (event: any) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({
      email: mailAddress
    })

    if (error) {
      alert(error.message)
    } else {
      alert('ログイン用のメールを送信しました!ご確認ください！')
    }
    setLoading(false)
  }
  return (
    <div className='w-full'>
      <div className='w-full mt-24 flex justify-center'>
        <SiteTitle />
      </div>
      <form onSubmit={handleLogin}>
        <div className='flex justify-center'>
          <div className='w-[11.5rem]'>
            <div className='w-full flex justify-center'>
              <div className='w-full'>
                <div className='w-full h-[3.5rem] mt-[1.6rem]'>
                  <div className='w-full flex justify-start'>
                    <p className='text-sm'>メールアドレス</p>
                  </div>
                  <div className='w-full flex justify-start mt-2'>
                    <input
                      type='email'
                      value={mailAddress}
                      placeholder='Mail Address'
                      className='w-full border border-black rounded-md'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex justify-end mt-10'>
              {/* <Link to='/home'> */}
                <button className='w-[3.75rem] h-[1.56rem] rounded-lg bg-green-600 text-white'>
                  {loading ? <p className='text-base'>Loading</p>
                  : <p className='text-base'>Login</p>}
                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;