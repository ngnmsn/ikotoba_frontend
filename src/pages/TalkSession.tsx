import SiteTitle from '../components/SiteTitle';

function TalkSession() {
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
              <div className='w-1/2 flex justify-start'><p className='text-xl'>TalkSession1</p></div>
              <div className='w-1/2 flex justify-end'>
                <button className='w-16 h-6 bg-green-600 rounded-lg text-white flex items-center justify-center'>
                  <div><p className='text-xl'>&#0043;</p></div>
                </button>
              </div>
            </div>
            <div className='w-full h-20 rounded-lg mt-9 pt-1 pl-2 border border-black flex flex-col justify-start'>
              <div className='flex justify-start'><p className='text-base'>title</p></div>
              <div className='flex justify-start'><p className='text-sm'>message</p></div>
            </div>
            <div className='w-full h-20 rounded-lg mt-9 pt-1 pl-2 border border-black flex flex-col justify-start'>
              <div className='flex justify-start'><p className='text-base'>title</p></div>
              <div className='flex justify-start'><p className='text-sm'>message</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TalkSession;