import React ,{useState,useEffect}from 'react';
import { X } from 'lucide-react';
import './Resume.css';

function Resume({ onClose }) {
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
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">Nitesh Kumar</h2>
        <p className="text-center text-gray-600">Web Designer & Developer</p>
        
        <div className="resumeContent space-y-4 mt-4 text-black">
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Career Objective</h3>
            <p>To make a contribution in the organization with the best of my ability and develop new skills during the interaction to achieve new heights.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Academic Qualification</h3>
            <ul className="pl-5 text-gray-700 list-none">
              <li>10th pass from CBSE board (2020)</li>
              <li>12th pass from CBSE board (2022)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Other Qualification</h3>
            <p>Pursuing Bachelor of Computer Application (BCA)</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Work Experience</h3>
            <p>Fresher</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Personal Information</h3>
            <ul className="pl-5 text-gray-700 list-none">
              <li>Father's Name: Umesh Kumar</li>
              <li>Date of Birth: 08-Jan-2005</li>
              <li>Languages Known: Hindi, English</li>
              <li>Gender: Male</li>
              <li>Nationality: Indian</li>
              <li>Marital Status: Unmarried</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;