/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Link from 'next/link';
import React, { useState } from 'react';

import { auth, storage } from '@/firebase';
function Register() {
  const [error, setError] = useState<string>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // eslint-disable-next-line unused-imports/no-unused-vars
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const storageRef = ref(storage, 'images/' + displayName + '.jpg');
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (error: any) => {
          setError(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (photoURL) => {
            await updateProfile(response.user, { displayName, photoURL });
          });
        }
      );
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <div className='flex h-screen w-full items-center justify-center bg-[#A8BCFF] '>
      <div className='w-[600px] rounded-xl bg-white '>
        <h1 className='py-4 text-center text-[rgb(91,88,116)] '>App Chat</h1>
        <p className='text-center text-[#5B5874]'>Register</p>
        <form
          className='flex flex-col gap-5 py-4 px-10'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            className=' border-b-1 border-t-0 border-l-0 border-r-0  border-[#5B5874] '
            placeholder='John Doe'
          />
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
          <input type='file' id='file' className='hidden' />
          <label htmlFor='file' className='text-[#A8BCFF]'>
            Add an Avatar{' '}
          </label>

          <button
            type='submit'
            value='Open'
            className='bg-[#7189D9] py-2 font-semibold text-[#fff]'
          >
            Sign up
          </button>
          {error && (
            <p className='text-center text-red-500'>something happended</p>
          )}
        </form>
        <p className='py-3 text-center'>
          You do have an account ?{' '}
          <Link href='' className='text-[rgb(91,88,116)]'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
