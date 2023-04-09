import { Link } from 'react-router-dom';

import SiteTitle from '../components/SiteTitle';

function Signup() {
  return (
    <div className='w-full'>
      <div className='w-full mt-24 flex justify-center'>
        <SiteTitle />
      </div>
      <div className='flex justify-center'>
        <div className='w-[11.5rem]'>
          <div className='w-full flex justify-center'>
            <div className='w-full'>
              <div className='w-full h-[3.5rem] mt-[1.6rem]'>
                <div className='w-full flex justify-start'>
                  <p className='text-sm'>ユーザ名</p>
                </div>
                <div className='w-full flex justify-start mt-2'>
                  <input type='text' className='w-full border border-black rounded-md'></input>
                </div>
              </div>
              <div className='w-full h-[3.5rem] mt-[1.6rem]'>
                <div className='w-full flex justify-start'>
                  <p className='text-sm'>メールアドレス</p>
                </div>
                <div className='w-full flex justify-start mt-2'>
                  <input type='text' className='w-full border border-black rounded-md'></input>
                </div>
              </div>
              <div className='w-w-full h-[3.5rem] mt-[1.6rem]'>
                <div className='w-full flex justify-start'>
                  <p className='text-sm'>パスワード</p>
                </div>
                <div className='w-full flex justify-start mt-2'>
                  <input type='password' className='w-full border border-black rounded-md'></input>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-end mt-10'>
            <Link to='/login'>
              <button className='w-[3.75rem] h-[1.56rem] rounded-lg bg-green-600 text-white'>
                <p className='text-base'>Signup</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;