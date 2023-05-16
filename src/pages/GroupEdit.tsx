import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import SiteTitle from '../components/SiteTitle';

function Form() {
  const params = useParams();
  const [groupId, setGroupId] = useState(params.groupId);
  const [groupName, setGroupName] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const navigation = useNavigate();

  const hundleGroupEdit = async(event:any) => {
    event.preventDefault();
    await supabase.from('group_table').update({groupname: groupName, detail: detail, updatedate: new Date().toISOString()}).eq('groupid', groupId).select()
    .then(({data, error}: any) => {
      console.log(data);
      console.log(error);
      if (error != null) {
        alert('グループの編集に失敗しました。');
        return;
      } 
      if (data == null) {
        alert('データの受信に失敗しました。');
        return;
      }
      alert('グループを編集しました。');
      navigation('/group/' + groupId);
    });
  }

  useEffect(() => {
    supabase.from('group_table')
            .select('groupid, groupname, detail')
            .eq('groupid', groupId)
            .then(({data, error}: any) => {
              console.log(data);
              console.log(error);
              if (data[0].groupname != null) {
                setGroupName(data[0].groupname);
              }
              if (data[0].detail != null) {
                setDetail(data[0].detail);
              }
            });
  }, [groupId]);

  return (
    <div className='w-full flex justify-center'>
      <form onSubmit={hundleGroupEdit} className='w-80 mt-7 flex flex-col'>
        <div className='w-full flex justify-start'>
          <div className='mr-9'><p className='text-xl'>グループ編集</p></div>
        </div>
        <div className='w-full mt-9 flex flex-col'>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>グループ名</p></div>
          <div className='w-full mt-2 flex justify-start'><input onChange={(e) => setGroupName(e.target.value)} value={groupName} type='text' className='w-full h-7 rounded-lg border border-black'></input></div>
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

function GroupEdit() {

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
export default GroupEdit;