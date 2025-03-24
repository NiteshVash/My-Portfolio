import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
// import './Css.css'; // Assuming a corresponding CSS file will be created

const CssInfo = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/5 lg:w-2/5 relative border border-blue-300 transform transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-90'}`}>
                <button
                    className="absolute top-4 right-4 text-blue-600 hover:text-black cursor-pointer"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">CSS Language</h2>
                <p className="text-center text-gray-600">The Style Sheet Language for Web Development</p>

                <div className="space-y-4 mt-4 text-black">
                    <div>
                        <h3 className="text-lg font-semibold text-blue-700">Overview</h3>
                        <p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-blue-700">Key Features</h3>
                        <ul>
                            <li>Separation of Content and Presentation: CSS allows for the separation of content from design.</li>
                            <li>Responsive Design: CSS enables responsive web design, allowing web pages to adapt to different screen sizes.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-blue-700">Usage</h3>
                        <p>CSS is used to style web pages, including layout, colors, fonts, and animations. It is a fundamental technology for web development.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CssInfo;
