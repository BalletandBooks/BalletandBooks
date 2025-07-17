'use client';
import React, { useState } from 'react';
import styles from './page.module.css';

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
      <h1 className={styles.pageHeading}>Curriculum</h1>

      {/* Collapsible Button */}
      <button className={styles.dropdownButton} onClick={toggleTableVisibility}>
        {isTableVisible ? 'Hide Modules' : 'Week 1'}
      </button>

      {/* Collapsible Table */}
      {isTableVisible && (
        <div className={styles.curriculumContainer}>
          <table className={styles.modulesTable}>
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