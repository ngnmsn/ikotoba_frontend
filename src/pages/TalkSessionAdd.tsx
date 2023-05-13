import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { supabase } from '../supabaseClient';

import SiteTitle from '../components/SiteTitle';

function Form() {
  
  const param = useParams();
  const [groupId, setGroupId] = useState<string|undefined>(param.groupId);
  const [sessionName, setSessionName] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const navigation = useNavigate();

  const hundleTalkSessionAdd = async(event:any) => {
    event.preventDefault();
    const { data, error } = await supabase.from('talk_session_table').insert([{groupid: Number(groupId), sessionname: sessionName, detail: detail, createdate: new Date().toISOString(), updatedate: new Date().toISOString()}]);
    console.log(data);
    console.log(error);
    if (error == null) {
      navigation('/group/' + groupId);
    } else {
      alert('トークセッションの追加に失敗しました。');
    }
  }
  return (
    <div className='w-full flex justify-center'>
      <form onSubmit={hundleTalkSessionAdd} className='w-80 mt-7 flex flex-col'>
        <div className='w-full flex justify-start'>
          <div className='mr-9'><p className='text-xl'>トークセッション追加</p></div>
        </div>
        <div className='w-full mt-9 flex flex-col'>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>トークセッション名</p></div>
          <div className='w-full mt-2 flex justify-start'><input onChange={(e) => setSessionName(e.target.value)} value={sessionName} type='text' className='w-full h-7 rounded-lg border border-black'></input></div>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>詳細</p></div>
          <div className='w-full mt-2 flex justify-start'><textarea onChange={(e) => setDetail(e.target.value)} value={detail} className='w-full h-24 rounded-lg border border-black'></textarea></div>
        </div>
        <div className='w-full mt-8 flex flex-row'>
          <div className='w-1/2 flex justify-start'>
            <Link to={'/group/' + groupId}>
              <button className='w-16 h-6 rounded-lg border border-black bg-white flex items-center justify-center'>
                <div><p className='text-base'>Cancel</p></div>
              </button>
            </Link>
          </div>
          <div className='w-1/2 flex justify-end'>
              <input type='submit' value='OK' className='w-16 h-6 bg-green-600 rounded-lg text-white flex items-center justify-center text-base font-bold' />
          </div>
        </div>
      </form>
    </div>
  )
}

function TalkSessionAdd() {

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
        <Form />
      </div>
    </div>
  )
}

export default TalkSessionAdd;