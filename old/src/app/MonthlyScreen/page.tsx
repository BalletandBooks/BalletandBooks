//copy and past all of the sign in page template design from page.tsx here
'use client'
import { Launch, SettingsApplications } from '@mui/icons-material';
import Layout from '../../../components/Layout';
import React, { useState } from 'react'

const MonthlyScreen = () => {
    const [email, setWeekly] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [tasks, setTasks] = useState([]);
    

    const func = () => {
        
    };

  return (
    <Layout>
      <div className='w-full h-screen flex items-start'>
        <h1 className='text-4xl text-white font-bold my-4'>Learning</h1>
      </div>
    </Layout>
  );
}

export default MonthlyScreen