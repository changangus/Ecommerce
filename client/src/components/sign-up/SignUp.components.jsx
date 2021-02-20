import React, { useState } from 'react';
import { connect } from 'react-redux';
import './SignUp.styles.scss';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      alert('passwords must match');
      return;
    };

    signUpStart({email, password, displayName});

    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>Register for an account</h2>
      <span>Sign up with your email password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          name='displayName'
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
        />
        <FormInput
          label='Email'
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <FormInput
          label='Password'
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <FormInput
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);