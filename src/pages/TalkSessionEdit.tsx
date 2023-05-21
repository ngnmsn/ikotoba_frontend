import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

import SiteTitle from '../components/SiteTitle';

function Form() {
  const params = useParams();
  const [talkSessionId, setTalkSessionId] = useState(params.talkSessionId);
  const [sessionName, setSessionName] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const navigation = useNavigate();

  const hundleEditTalkSession = async(event:any) => {
    event.preventDefault();
    await supabase.from('talk_session_table').update({sessionname: sessionName, detail: detail, updatedate: new Date().toISOString()}).eq('talksessionid', talkSessionId).select()
    .then(({data, error}: any) => {
      console.log(data);
      console.log(error);
      if (error != null) {
        alert('トークセッションの編集に失敗しました。');
        return;
      } 
      if (data == null) {
        alert('データの受信に失敗しました。');
        return;
      }
      alert('トークセッションを編集しました。');
      console.log(talkSessionId)
      navigation('/talk_session/' + talkSessionId);
    });
  }

  useEffect(() => {
    supabase.from('talk_session_table')
            .select('talksessionid, sessionname, detail')
            .eq('talksessionid', talkSessionId)
            .then(({data, error}: any) => {
              console.log(data);
              console.log(error);
              if (data[0].sessionname != null) {
                setSessionName(data[0].sessionname);
              }
              if (data[0].detail != null) {
                setDetail(data[0].detail);
              }
            });
  }, [talkSessionId]);
  
  return (
    <div className='w-full flex justify-center'>
      <form onSubmit={hundleEditTalkSession} className='w-80 mt-7 flex flex-col'>
        <div className='w-full flex justify-start'>
          <div className='mr-9'><p className='text-xl'>トークセッション編集</p></div>
        </div>
        <div className='w-full mt-9 flex flex-col'>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>トークセッション名</p></div>
          <div className='w-full mt-2 flex justify-start'><input onChange={(e) => setSessionName(e.target.value)} value={sessionName} type='text' className='w-full h-7 rounded-lg border border-black'></input></div>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>詳細</p></div>
          <div className='w-full mt-2 flex justify-start'><textarea onChange={(e) => setDetail(e.target.value)} value={detail} className='w-full h-24 rounded-lg border border-black'></textarea></div>
        </div>
        <div className='w-full mt-8 flex flex-row'>
          <div className='w-1/2 flex justify-start'>
            <Link to='/talk_session'>
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