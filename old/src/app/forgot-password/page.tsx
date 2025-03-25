//copy and past all of the sign in page template design from page.tsx here
'use client'
//import Link from 'next/link'
import React, { useState } from 'react'
import balletAndBooks from '../../../assets/balletAndBooks.jpg'
import google from '../../../assets/google.png'
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';

//first div, min-h-screen makes photo cover half of screen
const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const resetEmail = () => {
      sendPasswordResetEmail(auth, email);
    };
 
    return (
        <div className='w-full h-screen flex items-start'>
              <div className='relative w-2/5 h-full flex flex-col'>
                  {/* <div className='absolute top-[20%] left-[10%] flex flex-col'>
                      <h1 className='text-4xl text-white font-bold my-4'>Learning through dance</h1>
                      <p className='text-xl text-white font-normal'>Striving to reduce the literacy gap through dance and reading </p>
                  </div> */}
                  <img src={balletAndBooks.src} className='w-full h-full object-cover'/>
              </div>
      
              <div className=' h-full bg-[#f5f5f5] flex flex-col p-20 justify-center items-center'>
                  {/* <h1 className='w-full text-xl text-[#060606] max-w-[500px] mx-auto mr-auto font-semibold'>Ballet & Books</h1> */}
      
                  <div className='w-full flex flex-col max-w-full justify-center items-center'>
                      <div className='w-full flex flex-col mb-2'>
                        <h3 className='text-3xl font-semibold mb-6 text-[#060606]'>Forgot Password?</h3>
                        <p className="text-sm">
                            Enter the email address you used when you signed up and we'll send you send you instructions to reset your password.
                        </p>
                        <div className="mb-4 mt-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text"/>
                        </div>
                        
    
                      </div>
      
                  </div>
    
                  <div className='flex flex-col gap-y-4'>
    
                        <button className="text-white font-medium bg-[#060606] py-2 px-7 text-center items-center justify-center">
                            Send Reset Instructions
                        </button>
                        <div className='text-sm w-full flex items-center justify-center'>
                            <div className='font-semibold underline underline-offset-2 cursor-pointer'>
                                <Link href='/'>Back to Sign In</Link>
                            </div>
                        </div>
                  </div>
                  
              </div>
          </div>
      )
}

export default ForgotPasswordScreen