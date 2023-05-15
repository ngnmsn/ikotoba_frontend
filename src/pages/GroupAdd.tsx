import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../supabaseClient';

import SiteTitle from '../components/SiteTitle';

type Props = {
  userId: string | null;
}

function Form(props: Props) {

  const [groupId, setGroupId] = useState<number|null>(null);
  const [groupName, setGroupName] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [userId, setUserId] = useState<string|null>(props.userId);
  const navigation = useNavigate();

  const hundleGroupAdd = async(event:any) => {
    event.preventDefault();
    await supabase.from('group_table').insert([{groupname: groupName, detail: detail, createdate: new Date().toISOString(), updatedate: new Date().toISOString()}]).select()
    .then( async ({data, error}: any) => {
      console.log(data);
      console.log(error);
      if (error != null) {
        alert('グループの追加に失敗しました。');
        return;
      } 
      if (data == null) {
        alert('データの受信に失敗しました。');
        return;
      }
      setGroupId(data[0].groupid);
      console.log(userId);
      console.log(groupId);
      console.log(data[0].groupid);
      if (data[0].groupid != null && userId != null) {
        await supabase.from('member_table').insert([{groupid: data[0].groupid , userid: userId, createdate: new Date().toISOString(), updatedate: new Date().toISOString()}]).select()
        .then( async ({data, error}: any) => {
          console.log(data);
          console.log(error);
          if (error != null) {
            alert('グループの追加に失敗しました。');
            return;
          }
          if (data == null) {
            alert('データの受信に失敗しました。');
            return;
          }
          navigation('/home');
        });
      }
    });
  }

  return (
    <div className='w-full flex justify-center'>
      <form onSubmit={hundleGroupAdd} className='w-80 mt-7 flex flex-col'>
        <div className='w-full flex justify-start'>
          <div className='mr-9'><p className='text-xl'>グループ追加</p></div>
        </div>
        <div className='w-full mt-9 flex flex-col'>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>グループ名</p></div>
          <div className='w-full mt-2 flex justify-start'><input onChange={(e) => setGroupName(e.target.value)} value={groupName} type='text' className='w-full h-7 rounded-lg border border-black'></input></div>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>詳細</p></div>
          <div className='w-full mt-2 flex justify-start'><textarea onChange={(e) => setDetail(e.target.value)} value={detail} className='w-full h-24 rounded-lg border border-black'></textarea></div>
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

function GroupAdd(props: Props) {
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
export default GroupAdd;