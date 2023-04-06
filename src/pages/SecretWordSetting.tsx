import { Link } from 'react-router-dom';

import SiteTitle from '../components/SiteTitle';

function SecretWordSetting() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[23.5rem]'>
        <div className='w-full mt-5 flex justify-center'>
          <div className='w-1/2 flex justify-start'>
            <SiteTitle />
          </div>
          <div className='w-1/2 mr-5 flex justify-end'>
          {/* dammy */}
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-80 mt-7 flex flex-col'>
            <div className='w-full flex justify-start'>
              <div className='mr-9'><p className='text-xl'>合言葉設定</p></div>
            </div>
            <div className='w-full mt-2 flex flex-col'>
              <div className='w-full mt-8 flex flex-row'>
                <div className='w-1/2 flex justify-start'><p className='text-base font-bold'>1</p></div>
                <div className='w-1/2 flex justify-end'>
                  <Link to='/secret_word_edit'>
                    <button className='w-16 h-6 bg-green-600 text-white rounded-lg'>
                      <p className='text-base font-bold'>Edit</p>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='w-full h-20 mt-3 rounded-lg pt-1 pl-2 border border-black flex flex-col justify-start'>
                <div className='flex justify-start'><p className='text-base'>title</p></div>
                <div className='flex justify-start'><p className='text-sm'>message</p></div>
              </div>
              <div className='w-full mt-8 flex flex-row'>
                <div className='w-1/2 flex justify-start'><p className='text-base font-bold'>2</p></div>
                <div className='w-1/2 flex justify-end'>
                  <Link to='/secret_word_edit'>
                    <button className='w-16 h-6 bg-green-600 text-white rounded-lg'>
                      <p className='text-base font-bold'>Edit</p>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='w-full h-20 mt-3 rounded-lg pt-1 pl-2 border border-black flex flex-col justify-start'>
                <div className='flex justify-start'><p className='text-base'>title</p></div>
                <div className='flex justify-start'><p className='text-sm'>message</p></div>
              </div>
            </div>
            <div className='w-full mt-8 flex justify-center'>
              <Link to=''>
                <button className='w-16 h-6 bg-green-600 rounded-lg text-white flex items-center justify-center'>
                  <div><p className='text-xl font-bold'>&#0043;</p></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SecretWordSetting;