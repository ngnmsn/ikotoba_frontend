import { Link } from 'react-router-dom';

import SiteTitle from '../components/SiteTitle';

function Group() {
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
              <div className='mr-9'><p className='text-xl'>GroupA</p></div>
              <Link to='/secret_word_setting'>
                <button className='w-24 h-7 mr-3 bg-green-600 rounded-lg text-white'>
                  <div><p className='text-base'>合言葉設定</p></div>
                </button>
              </Link>
              <Link to='/group_edit'>
                <button className=' w-[6.375rem] h-7 bg-green-600 rounded-lg text-white'>
                  <div><p className='text-base'>グループ設定</p></div>
                </button>
              </Link>
            </div>
            <div className='w-full mt-7 flex justify-start'>
              <div><p className='text-base'>トークセッション</p></div>
            </div>
            <Link to='/talk_session'>
              <button className='w-full h-24 rounded-lg mt-4 p-1 border border-black flex items-start'>
                <div><p>TalkSession1</p></div>
              </button>
            </Link>
            <Link to='/talk_session'>
              <button className='w-full h-24 rounded-lg mt-4 p-1 border border-black flex items-start'>
                <div><p>TalkSession2</p></div>
              </button>
            </Link>
            <div className='w-full mt-6 flex justify-center'>
              <Link to='/talk_session_add'>
                <button className='w-16 h-6 bg-green-600 rounded-lg text-white flex items-center justify-center'>
                  <div><p className='text-xl'>&#0043;</p></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Group;