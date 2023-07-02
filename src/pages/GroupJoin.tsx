import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

import SiteTitle from '../components/SiteTitle';

type Props = {
  userId: string | null;
}

function Form(props: Props) {
  const params = useParams();
  const [groupId, setGroupId] = useState(Number(params.groupId));
  const [groupName, setGroupName] = useState<string>('');
  const [codeName, setCodeName] = useState<string>('');
  const [userId, setUserId] = useState<string|null>(props.userId);
  const navigation = useNavigate();

  const hundleGroupJoin = async(event:any) => {
    event.preventDefault();
    if (!userId) {
      alert('ユーザIDの設定に失敗しました。')
      return
    }
    await supabase.from('member_table')
                  .insert([{userid: userId, groupid: groupId, codename: codeName, createdate: new Date().toISOString(), updatedate: new Date().toISOString()}]).select()
                  .then( async ({data, error}: any) => {
                    console.log(data);
                    console.log(error);
                    if (error != null) {
                      alert('グループの参加に失敗しました。');
                      return;
                    } 
                    if (data == null) {
                      alert('データの受信に失敗しました。');
                      return;
                    }
                    alert(groupName + 'に参加しました。');
                    navigation('/group/' + groupId);
                  });
  }

  useEffect(() => {
    supabase.from('group_table')
                  .select('groupname')
                  .eq('groupid', groupId)
                  .then(({data, error}: any) => {
                      console.log(data);
                      console.log(error);
                      if(data) {
                        setGroupName(data[0].groupname)
                      }
                  });
  }, [groupId]);

  return (
    <div className='w-full flex justify-center'>
      <form onSubmit={hundleGroupJoin} className='w-80 mt-7 flex flex-col'>
        <div className='w-full flex justify-start'>
          <div className='mr-9'><p className='text-xl'>{ groupName }への参加</p></div>
        </div>
        <div className='w-full mt-9 flex flex-col'>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>CodeName</p></div>
          <div className='w-full mt-2 flex justify-start'><input onChange={(e) => setCodeName(e.target.value)} value={codeName} type='text' className='w-full h-7 rounded-lg border border-black'></input></div>
        </div>
        <div className='w-full mt-8 flex flex-row'>
          <div className='w-1/2 flex justify-start'>
            <Link to='/home'>
              <button className='w-16 h-6 rounded-lg border border-black bg-white flex items-center justify-center'>
                <div><p className='text-base'>Cancel</p></div>
              </button>
            </Link>
          </div>
          <div className='w-1/2 flex justify-end'>
            <input type='submit' value='OK' className='w-16 h-6 bg-green-600 rounded-lg text-white flex items-center justify-center text-base font-bold'/>
          </div>
        </div>
      </form>
    </div>
  )
}

function GroupJoin(props: Props) {
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
        <Form userId={props.userId}/>
      </div>
    </div>
  )
}
export default GroupJoin;