import React from 'react';
import './register.styles.scss';

import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.components';

const RegisterAndSignInPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
};

export default RegisterAndSignInPage;