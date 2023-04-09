import { Link } from 'react-router-dom';

import SiteTitle from '../components/SiteTitle';

function SecretWordEdit() {
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
              <div className='mr-9'><p className='text-xl'>合言葉編集</p></div>
            </div>
            <div className='w-full mt-2 flex flex-col'>
              <div className='w-full mt-8 flex flex-row'>
                <div className='w-1/2 flex justify-start'><p className='text-base font-bold'>1</p></div>
              </div>
              <div className='w-full mt-3 flex justify-start'><p className='text-sm'>タイトル</p></div>
              <div className='w-full mt-2 flex justify-start'><input type='text' className='w-full h-7 rounded-lg border border-black'></input></div>
              <div className='w-full mt-3 flex justify-start'><p className='text-sm'>メッセージ</p></div>
              <div className='w-full mt-2 flex justify-start'><textarea className='w-full h-14 rounded-lg border border-black'></textarea></div>
              <div className='w-full mt-3 flex justify-start'><p className='text-sm'>意味</p></div>
              <div className='w-full mt-2 flex justify-start'><textarea className='w-full h-14 rounded-lg border border-black'></textarea></div>
              <div className='w-full mt-3 flex justify-start'><p className='text-sm'>詳細</p></div>
              <div className='w-full mt-2 flex justify-start'><textarea className='w-full h-24 rounded-lg border border-black'></textarea></div>
            </div>
            <div className='w-full mt-8 flex flex-row'>
              <div className='w-1/2 flex justify-start'>
                <Link to='/secret_word_setting'>
                  <button className='w-16 h-6 rounded-lg border border-black bg-white flex items-center justify-center'>
                    <div><p className='text-base'>Cancel</p></div>
                  </button>
                </Link>
              </div>
              <div className='w-1/2 flex justify-end'>
                <Link to='/secret_word_setting'>
                  <button className='w-16 h-6 bg-green-600 rounded-lg text-white flex items-center justify-center'>
                    <div><p className='text-base font-bold'>OK</p></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SecretWordEdit;