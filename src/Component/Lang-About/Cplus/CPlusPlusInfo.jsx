import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CPlusPlusInfo = ({ onClose }) => {
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
                <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">C++ Language</h2>
                <p className="text-center text-gray-600">A General-Purpose Programming Language</p>

                <div className="space-y-4 mt-4 text-black">
                    <div>
                        <h3 className="text-lg font-semibold text-blue-700">Overview</h3>
                        <p>C++ is a general-purpose programming language created as an extension of the C programming language, or "C with Classes".</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-blue-700">Key Features</h3>
                        <ul>
                            <li>Object-Oriented: Supports object-oriented programming principles.</li>
                            <li>Performance: C++ is known for its high performance and efficiency.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-blue-700">Usage</h3>
                        <p>C++ is widely used for system/software development, game development, and in performance-critical applications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CPlusPlusInfo;