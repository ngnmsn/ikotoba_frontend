export const TalkInputModal = ({ onClose }: any ) => {
  return (
    <div className='w-full h-full fixed top-0 left-0 bg-black/40'>
      <div className='w-full mt-40 flex justify-center'>
        <div className='w-[20.5rem] h-[23.25rem] px-2 py-4 rounded-xl relative border border-black bg-white'>
          <div className='w-full h-20 rounded-lg pt-1 pl-2 border border-black flex flex-col justify-start'>
            <div className='flex justify-start'><p className='text-base'>title</p></div>
            <div className='flex justify-start'><p className='text-sm'>message</p></div>
          </div>
          <div className='w-full my-[1.5rem] flex justify-center'>
            <div className='w-[17.25rem] h-[10.5rem]'>
              <div className='w-full h-1/3 flex flex-row'>
                <div className='w-1/3 h-full flex justify-start items-start'>
                  <button className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>1</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-center items-start'>
                  <button className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>2</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-end items-start'>
                  <button className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>3</p></button>
                </div>
              </div>
              <div className='w-full h-1/3 flex flex-row'>
                <div className='w-1/3 h-full flex justify-start items-center'>
                  <button className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>4</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-center items-center'>
                  <button className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>5</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-end items-center'>
                  <button className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>6</p></button>
                </div>
              </div>
              <div className='w-full h-1/3 flex flex-row'>
                <div className='w-1/3 h-full flex justify-start items-end'>
                  <button className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>7</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-center items-end'>
                  <button className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>8</p></button>
                </div>
                <div className='w-1/3 h-full flex justify-end items-end'>
                  <button className='w-[4.75rem] h-[2.625rem] rounded-lg border border-black bg-white'><p className='text-2xl font-bold'>9</p></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <div className='w-[17.25rem] h-[10.5rem] flex flex-row'>
              <div className='w-1/2 flex justify-start'>
                <button onClick={onClose} className='w-[5.875rem] h-[2.1875rem] rounded-lg border border-black bg-white'><p className='text-xl'>Cancel</p></button>
              </div>
              <div className='w-1/2 flex justify-end'>
                <button onClick={onClose} className='w-[5.875rem] h-[2.1875rem] rounded-lg bg-green-600 text-white'><p className='text-xl font-bold'>Send</p></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};