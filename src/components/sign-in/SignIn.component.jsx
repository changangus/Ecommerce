import React, { useState } from 'react';

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
      <h2>Already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit} >
        <input name='email' type='email' value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Email</label>
        <input name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} required />
        <label>Password</label>
        <input type='submit' value='submit form' /> 
      </form>
    </div>
  )
};

export default SignIn