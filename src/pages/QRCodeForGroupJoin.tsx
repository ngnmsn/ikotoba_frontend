import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import SiteTitle from '../components/SiteTitle';

function QRCodeForGroupJoin() {
  const params = useParams();
  const groupId = useState(Number(params.groupId));
  const uri = new URL(window.location.href);
  console.log(uri.host);
  console.log(uri.hostname);
  console.log(uri.origin);
  console.log(uri.protocol);

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
              <div className='mr-9'><p className='text-xl'>グループ参加QRコード</p></div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center pt-14'>
          <QRCodeSVG value={uri.origin + '/group_join/' + groupId}></QRCodeSVG>
        </div>
      </div>
    </div>
  )
}
export default QRCodeForGroupJoin;