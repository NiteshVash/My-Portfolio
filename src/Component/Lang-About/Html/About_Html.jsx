import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react';
// import './About_Html.css';

const About_Html = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className={`resume fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm transition-opacity duration-300  ${isVisible ? 'opacity-100': 'opacity-0'} `}>
      <div className={`resumeContainer bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/5 lg:w-2/5 relative border border-blue-300 transform transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-90'}`}>
        <button 
          className="absolute top-4 right-4 text-blue-600 hover:text-black cursor-pointer"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">HTML Language</h2>
        <p className="text-center text-gray-600">HyperText Markup Language</p>
        
        <div className="resumeContent space-y-4 mt-4 text-black">
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Overview</h3>
            <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It is used to structure content on the web and is a fundamental technology alongside CSS and JavaScript.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Key Features</h3>
            <ul >
              <li>Elements and Tags: HTML uses elements and tags to define the structure and content of a web page.</li>
              <li>Attributes: HTML elements can have attributes that provide additional information about the element.</li>
              <li>Forms: HTML provides a way to create interactive forms for user input.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Usage</h3>
            <p>HTML is used by web developers to create the structure of web pages. It is essential for building websites and web applications.</p>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default About_Html