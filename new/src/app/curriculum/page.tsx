'use client';
import React, { useState } from 'react';
import NavBar from '../../../components/nav';

const CurriculumPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <NavBar />
      <h1>Curriculum Page</h1>
      <p>This is a placeholder for the curriculum page.</p>

      {/* Long Dropdown */}
      <div style={{ marginTop: '20px', width: '100%' }}>
        <button
          onClick={toggleDropdown}
          style={{
            padding: '15px',
            backgroundColor: '#1ea3cc',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            width: '100%', // Full-width button
            textAlign: 'left', // Align text to the left
          }}
        >
          {isOpen ? 'Hide Details' : 'Show Details'}
        </button>
        {isOpen && (
          <div
            style={{
              marginTop: '10px',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
              width: '100%', // Full-width dropdown
              boxSizing: 'border-box', // Include padding and border in width
            }}
          >
            <p>Here are the details of the curriculum.</p>
            <ul>
              <li>Module 1: Introduction</li>
              <li>Module 2: Basics</li>
              <li>Module 3: Advanced Topics</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurriculumPage;