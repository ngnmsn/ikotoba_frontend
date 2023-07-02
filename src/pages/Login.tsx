import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import SiteTitle from '../components/SiteTitle';
import LoginMailForm from '../components/LoginMailForm';
import OnetimePasswordForm from '../components/OnetimePasswordForm';

function Login() {
  const [mailAddress, setEmail] = useState<string>('');
  const [isMailSended, setIsMailSended] = useState<boolean>(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

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
          <LoginMailForm handOverMailAdress={handOverMailAdress} onMailSended={onMailSended} />
        ) : (
          <OnetimePasswordForm mailAddress={mailAddress} from={from}/>
        )
      }
    </div>
  )
}

export default Login;