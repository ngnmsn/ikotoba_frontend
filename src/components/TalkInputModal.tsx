import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

type Props = {
  onClose: any,
  talkSessionId: string|undefined,
  userId: string|null
}

export const TalkInputModal = (props: Props) => {
  const [talkSessionId, setTalkSessionId] = useState<string|undefined>(props.talkSessionId);
  const [groupId, setGroupId] = useState<number|null>(null);
  const [secretWordList, setSecretWordList] = useState<any[]>([]);
  const [activeSecretWordIndex, setActiveSecretWordIndex] = useState<number>(0);
  const [secretWordTitle, setSecretWordTitle] = useState<string>('');
  const [secretWordBody, setSecretWordBody] = useState<string>('');
  const [userId, setUserId] = useState<string|null>(props.userId);
  const [memberId, setMemberId] = useState<number|undefined>(undefined);

  console.log(userId);

  const hundleSendSecretMessage = async(event:any) => {
    event.preventDefault();
    // console.log(memberId);
    await supabase.from('talk_record_table')
                  .insert([{talksessionid: Number(talkSessionId), secretwordid: secretWordList[activeSecretWordIndex].secretwordid, creatememberid: memberId, cancelflg: false, createdate: new Date().toISOString(), updatedate: new Date().toISOString()}])
                  .select()
                  .then(({data, error}: any) => {
                    // console.log(data);
                    // console.log(error);
                    if (error != null) {
                      alert('メッセージの送信に失敗しました。');
                      return;
                    }
                    if (data == null) {
                      alert('データの受信に失敗しました。');
                      return;
                    }
                    // alert('メッセージを送信しました。');
                    return props.onClose();
                  });
  }

  useEffect( () => {
    const getGroupId = async() => {
      await supabase.from('talk_session_table')
              .select('groupid')
              .eq('talksessionid', Number(talkSessionId))
              .then( async ({data, error}: any) => {
                console.log(data);
                console.log(error);
                setGroupId(data[0].groupid);
              });
    }
    const getMemberId = async() => {
      await supabase.from('member_table')
                    .select('memberid')
                    . match({ userid: userId, groupid: groupId })
                    .then( ({ data, error }: any) => {
                      console.log('memberId取得結果')
                      console.log(data);
                      console.log(error);
                      if (data == null) {
                        alert('データの受信に失敗しました。');
                        return;
                      }
                    setMemberId(data[0].memberid);
                    })
    }
    const getSecretWordList = async() => {
      await supabase.from('secret_word_table')
                    .select('secretwordid, secretwordtitle, secretwordbody')
                    .eq('groupid', groupId)
                    .then( ({data, error}: any) => {
                      console.log(data);
                      console.log(error);
                      setSecretWordList(data);
                    })
    }
    getGroupId();
    if (groupId != null && userId != null) {
      getMemberId();
      getSecretWordList();
    }
  }, [talkSessionId, groupId, userId, memberId]);

  useEffect(() => {
    if (activeSecretWordIndex in secretWordList) {
      setSecretWordTitle(secretWordList[activeSecretWordIndex].secretwordtitle);
      setSecretWordBody(secretWordList[activeSecretWordIndex].secretwordbody);
    }
  }, [activeSecretWordIndex, secretWordList])

  return (
    <div className='w-full h-full fixed top-0 left-0 bg-black/40'>
      <div className='w-full mt-40 flex justify-center'>
        <div className='w-[20.5rem] h-[23.25rem] px-2 py-4 rounded-xl relative border border-black bg-white'>
          <div className='w-full h-20 rounded-lg pt-1 pl-2 border border-black flex flex-col justify-start'>
            <div className='flex justify-start'><p className='text-base'>{secretWordTitle}</p></div>
            <div className='flex justify-start'><p className='text-sm'>{secretWordBody}</p></div>
          </div>
          <div className='w-full my-[1.5rem] flex justify-center'>
            <div className='w-[17.25rem] h-[10.5rem]'>
              <div className='w-full h-1/3 flex flex-row'>
                <div className='w-1/3 h-full flex justify-start items-start'>
                  <button onClick={()=> setActiveSecretWordIndex(0)} className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>1</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-center items-start'>
                  <button onClick={()=> setActiveSecretWordIndex(1)} className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>2</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-end items-start'>
                  <button onClick={()=> setActiveSecretWordIndex(2)} className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>3</p></button>
                </div>
              </div>
              <div className='w-full h-1/3 flex flex-row'>
                <div className='w-1/3 h-full flex justify-start items-center'>
                  <button onClick={()=> setActiveSecretWordIndex(3)} className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>4</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-center items-center'>
                  <button onClick={()=> setActiveSecretWordIndex(4)} className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>5</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-end items-center'>
                  <button onClick={()=> setActiveSecretWordIndex(5)} className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>6</p></button>
                </div>
              </div>
              <div className='w-full h-1/3 flex flex-row'>
                <div className='w-1/3 h-full flex justify-start items-end'>
                  <button onClick={()=> setActiveSecretWordIndex(6)} className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>7</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-center items-end'>
                  <button onClick={()=> setActiveSecretWordIndex(7)} className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>8</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-end items-end'>
                  <button onClick={()=> setActiveSecretWordIndex(8)} className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>9</p></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <div className='w-[17.25rem] h-[10.5rem] flex flex-row'>
              <div className='w-1/2 flex justify-start'>
                <button onClick={props.onClose} className='w-[5.875rem] h-[2.1875rem] rounded-lg border border-black bg-white'><p className='text-xl'>Cancel</p></button>
              </div>
              <div className='w-1/2 flex justify-end'>
                <button onClick={hundleSendSecretMessage} className='w-[5.875rem] h-[2.1875rem] rounded-lg bg-green-600 text-white'><p className='text-xl font-bold'>Send</p></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};