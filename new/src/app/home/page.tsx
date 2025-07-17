import React from 'react';

const HomePage = () => {
    return (
        <div style={{ backgroundColor: '1ea3cc', minHeight: '100vh' }}>
            <h1>Welcome to the Home Page</h1>
            <p>Another component</p>
        </div>
    );
};

export default HomePage;

// 'use client';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     if (!isLoggedIn) {
//       router.replace('/login');
//     }
//   }, [router]);

//   return (
//     <div>
//       <h1>Welcome to Home!</h1>
//       {/* Your protected content */}
//     </div>
//   );
// }

// Throw all pages inside the home folder, so we don't need 