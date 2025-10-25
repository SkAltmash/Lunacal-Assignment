import React, { useState } from 'react';
import { FaQuestionCircle, FaTh } from 'react-icons/fa';

// Main Screen Component
const Screen = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('recommended'); // Set to 'recommended' to match the image

  return (
    <div className="max-w-xl flex mx-auto p-4 rounded-xl shadow-2xl w-[720px] h-[316px]  bg-[#363C43]">

      
      <div className="flex flex-col items-center justify-between h-[159.69px] p-2 mr-4 rounded-lg bg-custom-gradient">
        <FaQuestionCircle className="text-white w-6 h-6" />
        <FaTh className="text-white w-6 h-6" />
      </div>

      <div className="flex flex-col flex-grow">

        <div className="flex space-x-2 p-1 rounded-lg text-white bg-black/20">
          <TabButton
            id="aboutMe"
            label="About Me"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            id="experiences"
            label="Experiences"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            id="recommended"
            label="Recommended"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Content Area */}
        <div className="p-4 pl-0 rounded-lg overflow-y-auto custom-scrollbar">
          <div className="h-[175px] font-normal text-[16px] leading-relaxed text-[#969696] pr-4">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

            <br /><br />
            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters—Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9–10 AM. This is a...
          </div>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ id, label, activeTab, setActiveTab }) => {
  const isActive = activeTab === id;

  const activeClasses = 'bg-black text-white shadow-lg shadow-zinc-900';
  const inactiveClasses = 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50';

  return (
    <button
      onClick={() => setActiveTab(id)}
      className={`
        flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ease-in-out       
          ${isActive ? activeClasses : inactiveClasses}
      `}
    >
      {label}
    </button>
  );
};

export default Screen;

