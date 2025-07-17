// pages/Signup.jsx
import React, { useState } from 'react';
import signupHook from '../hooks/signupHook.js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthCard from '../components/AuthCard';

const Signup = () => {
  const { load, signup } = signupHook();
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = inputs;
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const trimmedInputs = {
      ...inputs,
      username: username.trim(),
      email: email.trim(),
    };

    try {
      await signup(trimmedInputs);
      navigate('/signin');
    } catch (error) {
      toast.error('Error occurred');
    }
  };

  return (
    <AuthCard title="Signup" subtitle="ChatApp">
      <form onSubmit={handlesubmit} className="space-y-4">
        {[
          { name: 'username', type: 'text' },
          { name: 'email', type: 'email' },
          { name: 'password', type: 'password' },
          { name: 'confirmPassword', type: 'password' },
        ].map(({ name, type }) => (
          <div key={name}>
            <label className="flex justify-start ml-2 text-sm font-medium text-white capitalize">{name.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type={type}
              placeholder={`Enter ${name}`}
              className="mt-1 block w-full bg-slate-700 text-white rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={inputs[name]}
              onChange={(e) => setInputs({ ...inputs, [name]: e.target.value })}
            />
          </div>
        ))}

        <p className="text-sm text-white">
          Already have an account?{' '}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => navigate('/signin')}
          >
            Sign in
          </span>
        </p>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
        >
          {load ? 'Signing up...' : 'Signup'}
        </button>
      </form>
    </AuthCard>
  );
};

export default Signup;
