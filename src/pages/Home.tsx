import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SiteTitle from '../components/SiteTitle';
import { ReactComponent as BellOn } from '../assets/bell_on.svg';
import { ReactComponent as BellOff } from '../assets/bell_off.svg';

const publicVapidKey = 'BMI3rZSRwZLrQFGUNa1MXM1kAilK8Xxv0EJqOyIih4Yghb66_yB7SBp3m9jln1fZyEACR36jxxO43vGt9g2NBLc';

function Home() {

  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);

  const handlePushSubscription = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      const pushSubscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
      });
      setSubscription(pushSubscription);
      setIsSubscribed(true);
    } catch (e) {
      console.error('Subscription error:', e);
    }
  }

  const handlePushUnsubscribe = async () => {
    if (!subscription) return;
    try {
      await subscription.unsubscribe();
      setIsSubscribed(false);
    } catch (e) {
      console.error('Unsubscription error:', e);
    }
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[23.5rem]'>
        <div className='w-full mt-5 flex justify-center'>
          <div className='w-1/2 flex justify-start'>
            <SiteTitle />
          </div>
          <div className='w-1/2 mr-5 flex justify-end'>
            { isSubscribed ? (
              <button onClick={handlePushUnsubscribe} className='w-[3.75rem] h-11 rounded-lg bg-green-600 flex justify-center items-center'>
                <BellOff />
              </button>
            ) : (
              <button onClick={handlePushSubscription} className='w-[3.75rem] h-11 rounded-lg bg-green-600 flex justify-center items-center'>
                <BellOn />
              </button>
            )}
            
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
            <Link to='/group'>
              <button className='w-full h-24 rounded-lg mt-4 p-1 border border-black flex items-start'>
                <div><p>GroupA</p></div>
              </button>
            </Link>
            <Link to='/group'>
              <button className='w-full h-24 rounded-lg mt-4 p-1 border border-black flex items-start'>
                <div><p>GroupB</p></div>
              </button>
            </Link>
            <div className='w-full mt-6 flex justify-center'>
              <Link to='/group_add'>
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
export default Home;

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  console.log(outputArray);
  return outputArray;
}