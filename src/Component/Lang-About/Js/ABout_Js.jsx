import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './ABout_Js.css';

const ABout_Js = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className={`ABout_Js fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`ABout_JsContainer bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/5 lg:w-2/5 relative border border-blue-300 transform transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-90'}`}>
        
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-blue-600 hover:text-black cursor-pointer"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">JavaScript Language</h2>
        <p className="text-center text-gray-600">The Programming Language of the Web</p>
        
        <div className="ABout_JsContent space-y-4 mt-4 text-black">
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Overview</h3>
            <p>JavaScript is a versatile, high-level programming language primarily used for web development. It enables dynamic and interactive experiences on websites and is a core technology alongside HTML and CSS.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Key Features</h3>
            <ul>
              <li> Dynamic Typing:  JavaScript is dynamically typed, allowing variables to hold different data types at runtime.</li>
              <li> Event-Driven:  JavaScript supports event-driven programming, making it ideal for interactive applications.</li>
             
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Usage</h3>
            <p>JavaScript is used in front-end web development, back-end services (Node.js), game development, and even mobile applications. It powers interactive web pages and modern frameworks like React, Angular, and Vue.js.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ABout_Js;
