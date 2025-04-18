'use client';
import React, { useState } from 'react';
import NavBar from '../../../components/nav';
import '../globals.css'; // Adjust the path as necessary

const CurriculumPage = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  const modules = [
    { name: 'Module 1', description: 'Introduction to the course', duration: '1 week' },
    { name: 'Module 2', description: 'Basics of the subject', duration: '2 weeks' },
    { name: 'Module 3', description: 'Advanced topics', duration: '3 weeks' },
  ];

  return (
    <div>
      <NavBar />
      <h1 className = "page-heading">Curriculum</h1>
      {/* Collapsible Button */}
      <button className="dropdown-button" onClick={toggleTableVisibility}>
        {isTableVisible ? 'Hide Modules' : 'Week 1'}
      </button>

      {/* Collapsible Table */}
      {isTableVisible && (
        <div className="curriculum-container">
          <table className="modules-table">
            <thead>
              <tr>
                <th>Module Name</th>
                <th>Description</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module, index) => (
                <tr key={index}>
                  <td>{module.name}</td>
                  <td>{module.description}</td>
                  <td>{module.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CurriculumPage;