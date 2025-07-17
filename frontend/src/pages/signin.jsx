// pages/Signin.jsx
import React, { useState } from 'react';
import signinHook from '../hooks/siginHook';
import { useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';

const Signin = () => {
  const navigate = useNavigate();
  const { load, signin } = signinHook();

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInputs = {
      ...inputs,
      username: inputs.username.trim(),
      email: inputs.email.trim(),
    };
    signin(trimmedInputs);
  };

  return (
    <AuthCard title="Login" subtitle="ChatApp">
      <form onSubmit={handleSubmit} className="space-y-4">
        {['username', 'email', 'password'].map((field) => (
          <div key={field}>
            <label className="flex justify-start text-sm font-medium text-white capitalize">{field}</label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              placeholder={`Enter ${field}`}
              className="mt-1 block w-full bg-slate-700 text-white rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={inputs[field]}
              onChange={(e) => setInputs({ ...inputs, [field]: e.target.value })}
            />
          </div>
        ))}

        <p className="text-sm text-white">
          Don't have an account?{' '}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => navigate('/signup')}
          >
            Signup
          </span>
        </p>

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
        >
          {load ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </AuthCard>
  );
};

export default Signin;
