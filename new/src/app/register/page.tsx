'use client'
import React, { useState } from 'react'
import jumpingBallerina from '../../../assets/jumpingBallerina.jpg'
import google from '../../../assets/google.png'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState("");

    const router = useRouter();


    // const signUp = async () => {
    //     try {
    //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //       const user = userCredential.user;
      
    //       // Set the display name
    //       const displayName = `${firstName} ${lastName}`;
    //       await updateProfile(user, { displayName: displayName });
                
    //       // Add user details to Firestore
    //       const userCollection = collection(db, 'users');
    //       const userDocRef = doc(userCollection, user.uid);
      
    //       // Check if the user document already exists
    //       const userDocSnapshot = await getDoc(userDocRef);
      
    //       if (!userDocSnapshot.exists()) {
    //         // If the user document doesn't exist, set it with additional details
    //         await setDoc(userDocRef, {
    //           firstName,
    //           lastName,
    //           email,
    //           role,
    //         });
      
    //         console.log('User signed up and additional details added successfully');
      
    //         // Redirect after Firestore update
    //         router.back(); // or router.push('/dashboard') or any other route
    //       } else {
    //         console.log('User already exists in Firestore. Additional details not added.');
    //       }
      
    //       console.log(`User successfully signed in with: ${user.uid}`);
    //     } catch (error) {
    //       console.error('Error during sign-up:', error);
    //       console.log("Could not sign up!");
    //     }
    //   };
      
    const testing = () => {
        console.log(email, password, firstName, lastName)
    }
    
    return (
      <div className='w-full h-screen flex items-start'>
          <div className='relative w-1/2 h-full flex flex-col'>
              <div className='absolute top-[5%] left-[10%] flex flex-col'>
                  <h1 className='text-4xl text-white font-bold my-4'>Let's Get Started</h1>
                  <p className='text-xl text-white font-normal'>Sign up to get connected with us! </p>
              </div>
              <img src={jumpingBallerina.src} className='w-full h-full object-cover'/>
          </div>
  
          <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-10 justify-between items-center'>
              {/* <h1 className='w-full text-xl text-[#060606] max-w-[500px] mx-auto mr-auto font-semibold'>Ballet & Books</h1> */}
  
              <div className='w-full flex flex-col max-w-[500px]'>
                  <div className='w-full flex flex-col mb-2'>
                    <h3 className='text-3xl font-semibold mb-2 text-[#060606]'>Sign Up</h3>
                    <div className="mb-4 mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            placeholder='Enter email'                        />
                    </div>
                    <div className='flex flex-row gap-2 justify-between' >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                First Name
                            </label>
                            <input 
                                className="shadow appearance-none border py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="firstname" 
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder='Jane'
                            />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Last Name
                        </label>
                        <input 
                            className="shadow appearance-none border py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="lastname" 
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Doe'
                        />
                    </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        {/* <input className="hidden js-password-toggle" id="toggle" type="checkbox" />
                        <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">show</label> */}
                        <input 
                            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter password'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Confirm Password
                        </label>
                        {/* <input className="hidden js-password-toggle" id="toggle" type="checkbox" />
                        <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">show</label> */}
                        <input 
                            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type='password'
                            placeholder='Re-enter password'                        />
                    </div>
                    <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            How would you describe yourself?
                        </label>
                    </div>
                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                        {/* <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> */}
                        <select 
                            value={role}
                            onChange={(e) => {
                            setRole(e.target.value);
                            }}
                            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="" selected>Select your role</option>
                            {/* <option value="adminMember">Admin Member</option> */}
                            <option value="mentor">Mentor</option>
                            <option value="studentLeader">Student Leader</option>
                        </select>
                  </div>
  
              </div>

              <div className='w-full flex flex-col my-4'>
                    <button 
                        // onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})}
                        disabled={(!email || !password || !confirmPassword || !firstName || !lastName) || (password !== confirmPassword)}
                        // onClick={signUp}
                        //disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
                        className='w-full text-white my-2 font-semibold bg-[#58B4D1] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'
                    >
                        Register
                    </button>
                </div>

              <div className='flex flex-col gap-y-4'>
                    <div className='text-sm'>
                        <p>By signing up, you agree to our Terms and Conditions</p>
                    </div>

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

export default RegisterScreen