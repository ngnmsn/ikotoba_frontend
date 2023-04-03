import { Link } from "react-router-dom";
import SiteTitle from '../components/SiteTitle';

function Top() {
  return (
    <div className='w-full'>
      <div className='w-full mt-24'>
        <SiteTitle />
      </div>
      <div className='w-full pt-12'>
        <Link to='/login'>
          <button className='w-[5rem] h-[2rem] mx-4 rounded-lg bg-green-600 text-white'>
            <p className='text-xl'>Login</p>
          </button>
        </Link>
        <button className='w-[5rem] h-[2rem] mx-4 rounded-lg bg-green-600 text-white'>
          <p className='text-xl'>Signup</p>
        </button>
      </div>
    </div>
  )
}

export default Top;