import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

type Props = {
  mailAddress : string
}

function OnetimePasswordForm(props: Props) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(props.mailAddress);
  const [token, setToken] = useState<string>('');
  const navigation = useNavigate();

  const handleOnetimePassword = async (event: any) => {
    event.preventDefault()
    console.log('email:' + email);
    console.log('token:' + token);

    setLoading(true)
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'magiclink'
    })

    if (error) {
      alert(error.message)
    } else {
      navigation('/');
    }
    setLoading(false)
  }
  return (
    <form onSubmit={handleOnetimePassword}>
      <div className='flex justify-center'>
        <div className='w-[11.5rem]'>
          <div className='w-full flex justify-center'>
            <div className='w-full'>
              <div className='w-full h-[3.5rem] mt-[1.6rem]'>
                <div className='w-full flex justify-start'>
                  <p className='text-sm'>ワンタイムパスワード</p>
                </div>
                <div className='w-full flex justify-start mt-2'>
                  <input
                    type='text'
                    value={token}
                    placeholder='Onetime Password'
                    className='w-full border border-black rounded-md'
                    onChange={(e) => setToken(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-end mt-10'>
            <button className='w-[3.75rem] h-[1.56rem] rounded-lg bg-green-600 text-white'>
              {loading ? <p className='text-base'>Loading</p>
              : <p className='text-base'>Login</p>}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default OnetimePasswordForm;