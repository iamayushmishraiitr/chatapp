import React, { useState } from 'react';
import signupHook from '../hooks/signupHook.js';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { load, signup } = signupHook();
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });
const navigate= useNavigate()  ;
  const handlesubmit = async (e) => {
    e.preventDefault();
    const trimmedInputs= {
      ...inputs ,
      username:username.trim() ,
      email: email.trim() 
    }
    signup(trimmedInputs); 

  };

  return (
    <div className='flex h-screen w-200px flex-col items-center justify-center'>
      <div className='w-100 mt-10 p-10 rounded-lg mr-20 mb-20 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          <span className='text-gray-500'>Signup</span>
          <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form onSubmit={handlesubmit}>
          <div className='mt-6'>
            <label className='block'>
              <span className='text-white'>Username</span>
              <input
                type='text'
                placeholder='Enter Username Here'
                className='w-full bg-slate-700 text-white rounded-lg input input-bordered h-10 p-2 mt-1'
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              />
            </label>
          </div>
          <div className='mt-4'>
            <label className='block'>
              <span className='text-white'>Email</span>
              <input
                type='text'
                placeholder='Enter Email Here'
                className='w-full bg-slate-700 text-white rounded-lg input input-bordered h-10 p-2 mt-1'
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              />
            </label>
          </div>
          <div className='mt-4'>
            <label className='block'>
              <span className='text-white'>Password</span>
              <input
                type='password'
                placeholder='Enter Password Here'
                className='w-full bg-slate-700 text-white rounded-lg input input-bordered h-10 p-2 mt-1'
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
            </label>
          </div>
          <div className='mt-4'>
            <label className='block'>
              <span className='text-white'>Confirm Password</span>
              <input
                type='password'
                placeholder='Confirm Password'
                className='w-full bg-slate-700 text-white rounded-lg input input-bordered h-10 p-2 mt-1'
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </label>
          </div>
          <p className='mt-4 text-white text-xl'>
            Already have an account? <span className='text-blue-400 cursor-pointer' onClick={()=>navigate('/signin')}>Sign in</span>
          </p>
          <button className='h-10 w-40 bg-blue-400 btn-block btn-sm mt-2 rounded-lg'>
            {load ? 'Signing up...' : 'Signup'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
