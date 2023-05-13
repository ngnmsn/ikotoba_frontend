import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

import SiteTitle from '../components/SiteTitle';

type TalkSessionList = {
  talksessionid: number,
  sessionname: string,
}[]

function Group() {
  const params = useParams();
  const [groupId, setGroupId] = useState(params.groupId);
  const [groupName, setGroupName] = useState<string| null>(null);
  const [talkSessionList, setTalkSessionList] = useState<TalkSessionList| null>(null)

  useEffect(() => {
    if (isFinite(Number(groupId))) {
      supabase.from('group_table')
      .select('groupid, groupname')
      .eq('groupid', Number(groupId))
      .then(({data, error}: any) => {
        console.log(data);
        console.log(error);
        setGroupName(data[0].groupname);
      });
      supabase.from('talk_session_table')
      .select('talksessionid, sessionname, groupid')
      .eq('groupid', Number(groupId))
      .then(({data, error}: any) => {
        console.log(data);
        console.log(error);
        setTalkSessionList(data);
      });
    }
  }, [groupId]);

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
              <div className='mr-9'><p className='text-xl'>{groupName}</p></div>
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
            { talkSessionList != null &&
              talkSessionList.map((talkSession) => {
                if (talkSession.talksessionid == null) { return null }
                if (talkSession.sessionname == null ) { return null }
                return (
                  <Link to={'/talk_session/' + talkSession.talksessionid } key={talkSession.talksessionid}>
                    <button className='w-full h-24 rounded-lg mt-4 p-1 border border-black flex items-start'>
                      <div><p>{talkSession.sessionname}</p></div>
                    </button>
                  </Link>
                )
              })
            }
            <div className='w-full mt-6 flex justify-center'>
              <Link to={'/talk_session_add/' + groupId}>
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