import SiteTitle from '../components/SiteTitle';
import { ReactComponent as PushBell } from '../assets/push_bell.svg';

function Home() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[23.5rem]'>
        <div className='w-full mt-5 flex justify-center'>
          <div className='w-1/2 flex justify-start'>
            <SiteTitle />
          </div>
          <div className='w-1/2 mr-5 flex justify-end'>
            <button>
              <PushBell />
            </button>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-80 h-36 mt-[3.25rem] flex flex-col'>
            <div className='w-full flex justify-start'>
              <div><p className='text-base'>新しいグループに参加</p></div>
            </div>
            <div className='grow flex flex-row justify-center items-center'>
              <button className='w-[6.68rem] h-[2.75rem] bg-green-600 rounded-lg text-white'><p>QR読み取り</p></button>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-80 mt-4 flex flex-col'>
            <div className='w-full flex justify-start'>
              <div><p className='text-base'>参加しているグループ</p></div>
            </div>
            <button className='w-full h-24 rounded-lg mt-4 p-1 border border-black flex items-start'>
              <div><p>GroupA</p></div>
            </button>
            <button className='w-full h-24 rounded-lg mt-4 p-1 border border-black flex items-start'>
              <div><p>GroupB</p></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;