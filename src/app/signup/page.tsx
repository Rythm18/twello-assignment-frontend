'use client';
import React, { useEffect, useState } from 'react';
import { postUpRequest } from '../utils/api';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(''); 

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/');
    }
  }, [router]);

  const signup = async () => {
    try {
      const response = await postUpRequest('/user/signup', username, email, password);
      const { token } = response;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      router.push('/');
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Signup failed. Please try again.'); 
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-[#AFA3FF]">
      <div className='w-full max-w-md p-12 rounded-lg shadow-md bg-[#F0F0F0]'>
        <h1 className='text-2xl font-bold text-center justify-center'> Welcome to <span className='text-[#4534AC]'>Workflo!</span></h1>
        <h2 className='text-red-800 text-center'>{error && <span className='text-red-500  text-center justify-center'>{error}</span>}</h2>  
        <form className='flex flex-col gap-4 mt-4' onSubmit={handleSubmit}>
          <input
            className='p-2 rounded-md bg-gray-200 w-full'
            type="text"
            name="username"
            placeholder='Full Name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='p-2 rounded-md bg-gray-200'
            type="email"
            name="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              className="p-2 rounded-md bg-gray-200 w-full"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.228a10.97 10.97 0 0 1 1.423-1.74m3.582-2.178A10.96 10.96 0 0 1 12 3c2.434 0 4.68.781 6.52 2.11m3.521 2.04a10.97 10.97 0 0 1 1.978 2.25m-8.03 8.288A6 6 0 0 0 12 18a6 6 0 0 0-5.021-8.911m-.6-.734a10.976 10.976 0 0 1 0-2.905m0 2.905L12 12m6 0a6 6 0 0 0-5.021-8.911m0 0a10.97 10.97 0 0 1 5.021 1.94"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.75 4.75l14.5 14.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
          <button
            type='submit'
            className='text-white rounded-lg bg-gradient-to-b from-[#4C38C2] to-[#2F2188] p-2'
          >
            Sign Up
          </button>
        </form>
        <div>
          <p className='text-center mt-4'>
            Already have an account? <a href="/login" className='text-purple-500'>Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
