//copy and past all of the sign in page template design from page.tsx here
'use client'
import React, { useState } from 'react'
import balletAndBooks from '../../../assets/balletAndBooks.jpg'
import google from '../../../assets/google.png'
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    //Another method with firebase:
    const firebaseSignIn = async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          // Signed in 
          const user = userCredential.user;
          console.log(`User successfully signed in with: ${user.uid}`);

          // You can redirect or perform other actions after successful sign-in
          
        } catch (e) {
            console.log(e);
            console.log("Could not sign in!")
        }
    };

  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col'>
            <div className='absolute top-[5%] left-[10%] flex flex-col'>
                <h1 className='text-4xl text-white font-bold my-4'>Learning Through Dance</h1>
                <p className='text-xl text-white font-normal'>Striving to reduce the literacy gap through dance and reading</p>
            </div>
            <img src={balletAndBooks.src} className='w-full h-full object-cover'/>
        </div>

        <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 items-center justify-center'>
            <h1 className='w-full text-xl text-[#060606] max-w-[500px] mx-auto mr-auto font-semibold'>Ballet & Books</h1>

            <div className='w-full flex flex-col max-w-[500px]'>
                <div className='w-full flex flex-col mb-2'>
                    <h3 className='text-3xl font-semibold mb-2 text-[#060606]'>Login</h3>
                    <p className='text-base mb-2 text-[#060606]'>Welcome Back! Please enter your details</p>
                </div>

                <div className='w-full flex flex-col'>
                    <input
                        id="email"
                        name='email'
                        type='email'
                        placeholder='Email'
                        autoComplete='email'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" 
                    />
                    {/* <input
                        type='email'
                        placeholder='Email'
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                    /> */}
                    <input
                        id="password"
                        name="password"
                        type='password'
                        autoComplete='current-password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="shadow appearance-none border py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                    {/* <input
                        type='password'
                        placeholder='Password'
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                    /> */}
                </div>

                <div className='w-full flex items-center justify-between py-4'>
                    <div className='w-full flex'>
                        <input type='checkbox' className='w-4 h-4 mr-2 cursor-pointer' />
                        <p className='text-sm text-[#060606]'>Remember Me for 30 days</p>
                    </div> 
                    <p 
                        onClick={() => router.push('/ForgotPasswordScreen')}
                        className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 text-[#060606]'
                    >
                        Forgot Password?
                    </p>
                </div>

                <div className='w-full flex flex-col'>
                    <button 
                        onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})}
                        disabled={!email || !password}
                        className='w-full text-white font-semibold bg-[#58B4D1] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'
                    >
                        Login
                    </button>
                </div>

                <div className='w-full flex items-center justify-center relative py-7'>
                    <div className='w-full h-[1px] bg-black'></div>
                    <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
                </div> 

                <button 
                    onClick={() => router.push('/RegisterScreen')}
                    className='w-full text-[#58B4D1] font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                    {/* <img src={google.src} className='h-6 mr-2'/> */}
                    Sign Up
                </button>


            </div>

            {/* <div className='w-full flex items-center justify-center'>
                <p className='text-sm font-normal text-[#060606] mr-1'>Don't have an account? 
                    <span 
                        onClick={() => router.push('/RegisterScreen')}
                        className='ml-1 font-semibold underline underline-offset-2 cursor-pointer'
                    >
                        Sign up!
                    </span>
                </p>
            </div> */}
        </div>
    </div>

    
  )
}

export default LoginScreen