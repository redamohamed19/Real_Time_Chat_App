/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Button from '@/components/buttons/Button';

function dashboard() {
  return (
    <div className='flex h-screen w-full items-center justify-center bg-[#A8BCFF] '>
      <div className='h-[800px] w-[1200px] rounded-xl bg-white '>
        {/**SideNavbar */}
        <div className='h-full w-1/3 '>
          <div className='flex h-[10%] items-center justify-between bg-[#2F2C52]  px-5 '>
            <h3 className='text-white '>Chat</h3>
            <div className='flex items-center gap-2'>
              <img
                src='https://img.freepik.com/vecteurs-libre/homme-mafieux-mysterieux-fumant-cigarette_52683-34828.jpg?w=826&t=st=1669240036~exp=1669240636~hmac=1d561be5fd16a9203394ca8cba8fe9cc6cf37f56fe0f094537545585b51a2480'
                alt='Avatar'
                className='h-8 w-8 rounded-full'
              />
              <Button className='border-none bg-[#3d3b5dec]'>logout</Button>
            </div>
          </div>
          <div className='h-[90%] bg-[#3d3b5dec]'>
            {/**Find a user */}
            <input
              placeholder='Find a User'
              className='w-full bg-transparent px-4  py-2 text-white placeholder:text-white '
            />
            {/**Friends */}
            <div>
              <div className='my-3 flex gap-2 px-2'>
                <img
                  src='https://images.unsplash.com/photo-1669178082499-341906b2ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80'
                  alt='Dave'
                  className='h-12 w-12 rounded-full'
                />
                <div>
                  <p className='text-lg text-white'>Dave</p>
                  <p className='text-sm text-white'>Hello</p>
                </div>
              </div>
              <div className='my-3 flex gap-2 px-2'>
                <img
                  src='https://images.unsplash.com/photo-1668692301597-de115ba6a95a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                  alt='Dave'
                  className='h-12 w-12 rounded-full'
                />
                <div>
                  <p className='text-lg text-white'>Starkie</p>
                  <p className='text-sm text-white'>whats'up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**Chat */}
        <div className='w-2/3'></div>
      </div>
    </div>
  );
}

export default dashboard;
