import React, { useState, useEffect } from 'react';
import { arrow } from '../assets3/icons';
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText, bubbleMessage }) => {
    const [showBubble, setShowBubble] = useState(false);

    const toggleBubble = () => {
        setShowBubble((prev) => !prev);
    };

    return (
        <div className="info-box flex items-start">
            <button
                onClick={toggleBubble}
                className="info-icon bg-gray-200 text-black rounded-full w-6 h-6 flex items-center justify-center mr-2"
                aria-label="Info"
            >
                i
            </button>
            {showBubble && (
                <div className="info-bubble bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-2 ml-2">
                    <p className="text-sm text-gray-700">{bubbleMessage}</p>
                </div>
            )}
            <div>
                <p className="font-medium sm:text-xl text-center">{text}</p>
                <Link to={link} className="neo-brutalism-white neo-btn">
                    {btnText}
                    <img src={arrow} className="w-4 h-4 object-contain" alt="arrow" />
                </Link>
            </div>
        </div>
    );
};

const renderContent = {
    1: (
        <h1
            className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5"
            style={{
                backgroundColor: '#00BFFF', // Slightly darker beige
                borderRadius: '12px', // Rounded corners
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
            }}
        >
            Hi! My name is <span className="font-semibold"> Mahathi Gumudavelli</span> 👋
            <br />
            A Computer Science major at Georgia Tech graduating in December 2025. 
            <br />
            Click the space bar to navigate through my journey! You can also the right and left keys to control the computer animation!
        </h1>
    ),
    2: (
        <InfoBox
            text="Youngest recruited intern at an AI-based FinTech company and experience in Fortune 500 companies."
            link="/about"
            btnText="Check out my work experience"
            bubbleMessage="Click on the white buttons to check out the relevant information in each section or use the space button to move onto the next section."
        />
    ),
    3: (
        <InfoBox
            text="Participated in many projects and founded the ATL chapter of ProjectCSGirls to improve my technical skills and share knowledge with others."
            link="/projects"
            btnText="See my projects"
            bubbleMessage="Click on the white buttons to check out the relevant information in each section or use the space button to move onto the next section."
        />
    ),
    4: (
        <InfoBox
            text="I am looking for opportunities and interested in learning/working in AI/ML, Software Development(SWE), Product Management, and UX/UI design."
            link="/contact"
            btnText="Contact Me!"
            bubbleMessage="Click on the white buttons to check out the relevant information in each section or use the space button to move onto the next section."
        />
    ),
};

const HomeInfo = () => {
    const [currentStage, setCurrentStage] = useState(1); // Track the current stage

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === ' ') {
                setCurrentStage((prevStage) => {
                    // Move to the next stage, or loop back to stage 1 if the last stage is reached
                    const nextStage =
                        prevStage === Object.keys(renderContent).length ? 1 : prevStage + 1;
                    return nextStage;
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div
            style={{
                transform: `scale(${1 + currentStage * 0.03})`, // Reduced zoom effect
                transition: 'transform 0.5s ease-in-out',
            }}
        >
            {renderContent[currentStage] || null}
        </div>
    );
};

export default HomeInfo;
