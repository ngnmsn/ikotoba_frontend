import { useState, useCallback } from 'react';

import SiteTitle from '../components/SiteTitle';
import LoginMailForm from '../components/LoginMailForm';
import OnetimePasswordForm from '../components/OnetimePasswordForm';

function Login() {
  const [mailAddress, setEmail] = useState<string>('');
  const [isMailSended, setIsMailSended] = useState<boolean>(false);

  const handOverMailAdress = (inputMailAddress: string) => {
    setEmail(inputMailAddress);
  } 

  const onMailSended = useCallback(() => {
    setIsMailSended(true);
  }, [setIsMailSended]);

  return (
    <div className='w-full'>
      <div className='w-full mt-24 flex justify-center'>
        <SiteTitle />
      </div>
      { !isMailSended ?
        (
          <LoginMailForm handOverMailAdress={handOverMailAdress} onMailSended={onMailSended}/>
        ) : (
          <OnetimePasswordForm mailAddress={mailAddress}/>
        )
      }
    </div>
  )
}

export default Login;