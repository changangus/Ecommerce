import React, { useState } from 'react';
import './SignIn.styles.scss';
import FormInput from '../form-input/FormInput.component';
import CustomButton from  '../custom-button/CustomButton.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setEmail('');
    setPassword('');
  } 

  return (
    <div className='sign-in'>
      <h2 className='title'>Already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit} >
        <FormInput 
          name='email' 
          label='Email' 
          type='email' 
          value={email} 
          handleChange={e => setEmail(e.target.value)} 
           />
        <FormInput 
          name='password' 
          label='Password'
          type='password' 
          value={password} 
          handleChange={e => setPassword(e.target.value)} 
          />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton> 
          <CustomButton 
            onClick={signInWithGoogle} 
            isGoogleSignIn type='button' 
            >
            Sign in with Google
          </CustomButton> 
        </div>
      </form>
    </div>
  )
};

export default SignIn