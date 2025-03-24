import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Cinfo = ({ onClose }) => {
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
                <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">C Language</h2>
                <p className="text-center text-gray-600">A General-Purpose Programming Language</p>

                <div className="space-y-4 mt-4 text-black">
                    <div>
                        <h3 className="text-lg font-semibold text-blue-700">Overview</h3>
                        <p>C is a general-purpose programming language that is extremely popular, simple, and flexible. It is machine-independent, structured programming language which is used extensively in various applications.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-blue-700">Key Features</h3>
                        <ul >
                            <li>Simple: C is a simple language with a small number of keywords.</li>
                            <li>Efficient: C is known for its performance and efficiency.</li>

                            <li>Extensible: C can easily adopt new features.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-blue-700">Usage</h3>
                        <p>C is widely used for system programming, developing operating systems, and embedded system applications. It is also used in developing compilers, network drivers, and other performance-critical applications.</p>
                        <ul >
                            <li>System Programming: Develop operating systems and system tools.</li>
                            <li>Embedded Systems: Build firmware and embedded applications.</li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cinfo;