import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

import SiteTitle from '../components/SiteTitle';

type Props = {
  userId: string | null;
}

function Form (props: Props) {
  const [searchParams] = useSearchParams();
  const [secretWordId, setSecretWordId] = useState(searchParams.get('secretWordId'));
  const [secretWordTitle, setSecretWordTitle] = useState<string>('');
  const [secretWordBody, setSecretWordBody] = useState<string>('');
  const [meaning, setMeaning] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [groupId, setGroupId] = useState(searchParams.get('groupId'));
  const [userId, setUserId] = useState<string|null>(props.userId);
  const [memberId, setMemberId] = useState<number|null>(null);
  const navigation = useNavigate();
  
  const hundleEditSecretWord = async(event:any) => {
    event.preventDefault();
    await supabase.from('secret_word_table')
                  .update({secretwordtitle: secretWordTitle, secretwordbody: secretWordBody, meaning: meaning, description: description, updatememberid: memberId, updatedate: new Date().toISOString()}).eq('secretwordid', secretWordId).select()
                  .then( async ({data, error}: any) => {
                    console.log(data);
                    console.log(error);
                    if (error != null) {
                      alert('合言葉の編集に失敗しました。');
                      return;
                    }
                    if (data == null) {
                      alert('データの受信に失敗しました。');
                      return;
                    }
                    navigation('/secret_word_setting/' + groupId);
                  });
  }

  useEffect(() => {
    supabase.from('secret_word_table')
              .select('secretwordtitle, secretwordbody, meaning, description')
              .eq('secretwordid', secretWordId)
              .then(({ data, error }: any) => {
                console.log(data);
                console.log(error);
                if (data == null) {
                  alert('データの受信に失敗しました。');
                  return;
                }
                if (data[0].secretwordtitle != null) {
                  setSecretWordTitle(data[0].secretwordtitle);
                }
                if (data[0].secretwordbody != null) {
                  setSecretWordBody(data[0].secretwordbody);
                }
                if (data[0].meaning) {
                  setMeaning(data[0].meaning);
                }
                if (data[0].description) {
                  setDescription(data[0].description);
                }
                setMemberId(data[0].memberid);
              });
  }, []);

  useEffect(() => {
    console.log(groupId);
    console.log(userId);
    if (userId != null && groupId != null) {
      supabase.from('member_table')
              .select('memberid')
              .match({ userid: userId, groupid: groupId })
              .then(({ data, error }: any) => {
                console.log(data);
                console.log(error);
                if (data == null) {
                  alert('データの受信に失敗しました。');
                  return;
                }
                setMemberId(data[0].memberid);
              });
    }
  }, [groupId, userId]);

  return (
    <div className='w-full flex justify-center'>
      <form onSubmit={hundleEditSecretWord} className='w-80 mt-7 flex flex-col'>
        <div className='w-full flex justify-start'>
          <div className='mr-9'><p className='text-xl'>合言葉編集</p></div>
        </div>
        <div className='w-full mt-2 flex flex-col'>
          <div className='w-full mt-8 flex flex-row'>
            <div className='w-1/2 flex justify-start'><p className='text-base font-bold'>1</p></div>
          </div>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>タイトル</p></div>
          <div className='w-full mt-2 flex justify-start'><input onChange={(e) => setSecretWordTitle(e.target.value)} value={secretWordTitle} type='text' className='w-full h-7 rounded-lg border border-black'></input></div>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>メッセージ</p></div>
          <div className='w-full mt-2 flex justify-start'><textarea onChange={(e) => setSecretWordBody(e.target.value)} value={secretWordBody} className='w-full h-14 rounded-lg border border-black'></textarea></div>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>意味</p></div>
          <div className='w-full mt-2 flex justify-start'><textarea onChange={(e) => setMeaning(e.target.value)} value={meaning} className='w-full h-14 rounded-lg border border-black'></textarea></div>
          <div className='w-full mt-3 flex justify-start'><p className='text-sm'>詳細</p></div>
          <div className='w-full mt-2 flex justify-start'><textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full h-24 rounded-lg border border-black'></textarea></div>
        </div>
        <div className='w-full mt-8 flex flex-row'>
          <div className='w-1/2 flex justify-start'>
            <Link to={'/secret_word_setting/' + groupId}>
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

function SecretWordEdit(props: Props) {
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
export default SecretWordEdit;