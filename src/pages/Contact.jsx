import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-blue-300">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">I am always excited about new opportunities to work with people!</h1>
                <p className="text-gray-600 text-lg mb-6">
                    If you would like to contact me, please use my LinkedIn.
                </p>
                <a
                    href="https://www.linkedin.com/in/mahathi-gumudavelli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Connect on LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Contact;