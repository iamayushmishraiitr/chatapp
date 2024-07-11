import React, { useState } from 'react';
import signinHook from '../hooks/siginHook';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const navigate= useNavigate() ;
  const { load, signin } = signinHook() 
  const handleSubmit =  (e) => {
    e.preventDefault();
    const trimmedInputs = {
      ...inputs,
      username: inputs.username.trim(),
      email: inputs.email.trim(),
    };
     signin(trimmedInputs);
  };

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    email: ''
  });

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='p-10 rounded-lg mr-20 mb-20 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          <span className='text-gray-500 font-bold'>Login</span>
          <span className='text-blue-500 font-bold'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='mt-6'>
            <label className='flex justify-start'>
              <span className='text-white font-bold'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter Username Here'
              className='w-full bg-slate-700 text-white rounded-lg input input-bordered h-10 p-2'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div className='mt-4'>
            <label className='flex font-bold justify-start'>
              <span className='text-white'>Email</span>
            </label>
            <input
              type='text'
              placeholder='Enter email Here'
              className='w-full bg-slate-700 text-white rounded-lg input input-bordered h-10 p-2'
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>
          <div className='mt-4'>
            <label className='flex justify-start'>
              <span className='text-white font-bold'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password Here'
              className='w-full bg-slate-700 text-white rounded-lg input input-bordered h-10 p-2'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <h1 className='mt-4 text-white text-xl'>
            Don't Have an account? <span className='text-blue-400 cursor-pointer' onClick={()=>navigate('/signup')}>Signup</span>
          </h1>

          <button className='h-10  bg-blue-400 btn-block btn-sm mt-2 rounded-lg'>
            {load ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
