'use client';

import React, { useState } from 'react';
import Nav from "../../../components/nav";
import Image from 'next/image';
import logo from '../../../assets/logo.png'; 

const cities = [
  { name: 'Ithaca', location: 'Ithaca, NY' },
  { name: 'Ithaca', location: 'Ithaca, NY' },
  { name: 'Ithaca', location: 'Ithaca, NY' },
  { name: 'Ithaca', location: 'Ithaca, NY' },
];

const DocumentsPage = () => {
  const [region, setRegion] = useState('East Coast');

  return (
    <div>
      <Nav />
      <div className="header">
        <h1 className="title">DOCUMENTS</h1>
        <div className="buttons">
          {['East Coast', 'Midwest', 'West Coast'].map((r) => (
            <button
              key={r}
              className={`regionButton ${region === r ? 'active' : ''}`}
              onClick={() => setRegion(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {cities.map((city, idx) => (
          <div key={idx} className="card">
            <Image src={logo} alt="City Logo" className="logo" />
            <div className="cardContent">
              <h3 className="cityName">{city.name.toUpperCase()}</h3>
              <p className="cityLocation">{city.location}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .header {
          text-align: center;
          padding: 4rem 2rem 2rem;
          background-color: #1ea3cc;
        }

        .title {
          color: white;
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .regionButton {
          background-color: #072736;
          color: white;
          border: none;
          border-radius: 20px;
          padding: 0.5rem 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .regionButton.active {
          background-color: #58b4d1;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem;
          background-color: white;
        }

        .card {
          background-color: #f3f3f3;
          display: flex;
          align-items: center;
          padding: 1.5rem;
          border-radius: 10px;
        }

        .logo {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 100%;
          margin-right: 1.5rem;
        }

        .cardContent {
          display: flex;
          flex-direction: column;
        }

        .cityName {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1b1b1b;
        }

        .cityLocation {
          font-size: 1rem;
          color: #58b4d1;
        }
      `}</style>
    </div>
  );
};

export default DocumentsPage;
