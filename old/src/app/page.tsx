'use client'
//import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import balletAndBooks from '../../assets/balletAndBooks.jpg'
import google from '../../assets/google.png'
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { auth, db } from './firebase';
import { addDoc, collection, getDoc, doc, setDoc } from 'firebase/firestore';
import Layout from '../../components/Layout';
import { useRouter } from 'next/navigation';
import {NextUIProvider} from "@nextui-org/react";

const colors = {
    primary: "060606",
    background: "#E0E0E0",
    disbaled: "#D9D9D9",
}

export default function Home () {
  const [userData, setUserData] = useState(null as any);
  const router = useRouter();
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDocRef = doc(collection(db, 'users'), user.uid);

        try {
          const docSnapshot = await getDoc(userDocRef);

          if (docSnapshot.exists()) {
            setUserData(docSnapshot.data());
          } else {
            console.log('User document does not exist.');
          }
        } catch (error) {
          console.error('Error fetching user data:', error); //error.message
        }
      } else {
        // Handle the case when the user is not authenticated
        console.log('no user found')
        setUserData(null as any);
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []); // <-- Empty dependency array for componentDidMount behavior

  const session = useSession( {
    required: true,
    onUnauthenticated() {
        redirect('/login');
    },
  });

  return (
    <NextUIProvider>
    <div>
      {userData && (
        <Layout>
          <div className="flex flex-col h-screen">
          {/* First Section */}
          <div className="flex-1 p-8 max-w max-h-[45%]">
            {/* Content for the first section goes here */}
            <h1 className="text-3xl font-bold text-white">Welcome Back, {userData.firstName}!</h1>
            <p className="text-white">Here's what you got left to do...</p>

            <div className="mr-8">
            {/* 2x2 box with checkboxes and text */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <input type="checkbox" id="checkbox1" className="mr-2" />
                <label htmlFor="checkbox1" className="text-white">Checkbox 1</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="checkbox2" className="mr-2" />
                <label htmlFor="checkbox2" className="text-white">Checkbox 2</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="checkbox3" className="mr-2" />
                <label htmlFor="checkbox3" className="text-white">Checkbox 3</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="checkbox4" className="mr-2" />
                <label htmlFor="checkbox4" className="text-white">Checkbox 4</label>
              </div>
            </div>
          </div>
          </div>

          {/* Second Section with Four Boxes */}
          <div className="flex-1 bg-white p-8 grid grid-cols-2 gap-4 rounded-xl overflow-hidden">
            {/* Box 1 */}
            <div className="bg-teal-500 relative rounded-xl overflow-hidden p-8" onClick={() => router.push('/TrainingScreen')} style={{ cursor: "pointer" }}>
              {/* Content for Box 1 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">Training Videos</h2>
              <div className="bg-amber-500 h-1 w-16 mb-4 rounded-xl overflow-hidden"></div> {/* Underline */}              
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-pink-600 relative rounded-xl overflow-hidden p-8" onClick={() => router.push('/CurriculumScreen')} style={{ cursor: "pointer" }}>
              {/* Content for Box 2 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">Curriculum</h2>
              <div className="bg-amber-500 h-1 w-16 mb-4 rounded-xl overflow-hidden"></div> {/* Underline */}
              
              {/* Content for Box 1 goes here */}
              
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-blue-950 relative rounded-xl overflow-hidden p-8" onClick={() => router.push('/DocumentsScreen')} style={{ cursor: "pointer" }}>
              {/* Content for Box 3 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">Documents/Waivers</h2>
              <div className="bg-amber-500 h-1 w-16 mb-4 rounded-xl overflow-hidden"></div> {/* Underline */}
              
              {/* Content for Box 1 goes here */}
              
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-orange-600 relative rounded-xl overflow-hidden p-8" onClick={() => router.push('/StudentCardsScreen')} style={{ cursor: "pointer" }}>
              {/* Content for Box 4 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">View Students</h2>
              <div className="bg-amber-500 h-1 w-16 mb-4 rounded-xl overflow-hidden"></div> {/* Underline */}
              
              {/* Content for Box 1 goes here */}
              
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </div>
          </div>
        </div>
        </Layout>
      )}
    </div>
    </NextUIProvider>

  )
}

{/* <div className='text-white p-8'>
            <p>User Data:</p>
            <p>First Name: {userData.firstName}</p>
            <p>Last Name: {userData.lastName}</p>
            <p>Email: {userData.email}</p>
            <p>Role: {userData.role}</p>
            <div className='text-white'>Session-based email: {session?.data?.user?.email }</div>

            <button className='text-white' onClick={() => signOut()}>Logout</button>
          </div> */}

Home.requireAuth = true
