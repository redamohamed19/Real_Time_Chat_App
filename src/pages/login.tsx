import Link from 'next/link';
import React from 'react';

import Button from '@/components/buttons/Button';

function Login() {
  return (
    <div className='flex h-screen w-full items-center justify-center bg-[#A8BCFF] '>
      <div className='w-[600px] rounded-xl bg-white '>
        <h1 className='py-4 text-center text-[rgb(91,88,116)] '>App Chat</h1>
        <p className='text-center text-[#5B5874]'>Login</p>
        <form className='flex flex-col gap-5 py-4 px-10'>
          <input
            type='email'
            className=' border-b-1 border-t-0 border-l-0 border-r-0 border-[#5B5874] '
            placeholder='email@exemple.com'
          />
          <input
            type='password'
            className=' border-b-1 border-t-0 border-l-0 border-r-0 border-[#5B5874] '
            placeholder='Password'
          />

          <Button className='flex items-center justify-center bg-[#7189D9] '>
            Sign in
          </Button>
        </form>
        <p className='py-3 text-center'>
          You don't have an account ?{' '}
          <Link href='/register' className='text-[rgb(91,88,116)]'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
