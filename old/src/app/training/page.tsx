'use client'
import React from 'react';
import Layout from '../../../components/Layout';
import {Button} from "@nextui-org/react";


function TrainingScreen() {
  return (
    <Layout>
          <div className="flex h-screen">
          {/* First Section */}
          {/* Second Section with Four Boxes */}
          <div className="flex-1 bg-white p-8 grid grid-cols-2 gap-4 rounded-xl overflow-hidden">
            {/* Box 1 */}
            <Button color="primary" variant="ghost" className="bg-teal-500 h-100 relative rounded-xl overflow-hidden p-8" style={{ cursor: "pointer" }}>
              {/* Content for Box 1 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">Training Videos</h2>
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </Button>

            {/* Box 2 */}
            <Button color="primary" variant="ghost" className="bg-teal-500 h-100 relative rounded-xl overflow-hidden p-8" style={{ cursor: "pointer" }}>
              {/* Content for Box 1 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">Training Videos</h2>
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </Button>

            {/* Box 3 */}
            <Button color="primary" variant="ghost" className="bg-teal-500 h-100 relative rounded-xl overflow-hidden p-8" style={{ cursor: "pointer" }}>
              {/* Content for Box 1 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">Training Videos</h2>
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </Button>

            {/* Box 4 */}
            <Button color="primary" variant="ghost" className="bg-teal-500 h-100 relative rounded-xl overflow-hidden p-8" style={{ cursor: "pointer" }}>
              {/* Content for Box 1 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">Training Videos</h2>
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </Button>

            <Button color="primary" variant="ghost" className="bg-teal-500 h-100 relative rounded-xl overflow-hidden p-8" style={{ cursor: "pointer" }}>
              {/* Content for Box 1 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">Training Videos</h2>
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </Button>

            <Button color="primary" variant="ghost" className="bg-teal-500 h-100 relative rounded-xl overflow-hidden p-8" style={{ cursor: "pointer" }}>
              {/* Content for Box 1 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">Training Videos</h2>
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </Button>

            <Button color="primary" variant="ghost" className="bg-teal-500 h-100 relative rounded-xl overflow-hidden p-8" style={{ cursor: "pointer" }}>
              {/* Content for Box 1 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">Training Videos</h2>
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </Button>
            
            <Button color="default" variant="ghost" className="bg-teal-500 h-100 relative rounded-xl overflow-hidden p-8" style={{ cursor: "pointer" }}>
              {/* Content for Box 1 goes here */}
              {/* Title with Underline */}
              <h2 className="text-white text-2xl font-bold mb-4">Training Videos</h2>
              {/* Chevron Arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <span className="text-white text-5xl">&#x203A;</span>
              </div>
            </Button>
          </div>
        </div>
        </Layout>
  );
}

export default TrainingScreen