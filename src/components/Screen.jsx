import React, { useState } from 'react';
import { FaQuestionCircle, FaTh } from 'react-icons/fa';

const Screen = () => {
  const [activeTab, setActiveTab] = useState(0); 
  const btns = ["About Me", "Experiences", "Recommended"];
  
  const move = (100 / btns.length) * activeTab; 
  const widthClass = btns.length === 3 ? "w-1/3" : "w-full";

  return (
    <div className="max-w-xl flex mx-auto p-4 rounded-2xl shadow-2xl w-[720px] h-[316px] bg-[#363C43]">
      <div className="flex flex-col items-center justify-between h-[159.69px] p-2 mr-4 rounded-2xl bg-custom-gradient">
        <FaQuestionCircle className="text-[#4A4E54] w-6 h-6" />
        <FaTh className="text-[#4A4E54] w-6 h-6" />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="relative bg-[#161718] rounded-2xl ">
          <div className="flex">
            {btns.map((btn, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)} 
                className={`
                  flex-1 p-4 cursor-pointer text-center transition-colors duration-300 relative z-10
                  ${activeTab === index
                    ? 'text-white font-semibold rounded-2xl'
                    : 'text-zinc-40 hover:text-white/80 group'
                  }
                `}
              >
                {activeTab !== index && (
                  <span className="absolute inset-0 bg-zinc-800/50 rounded-2xl w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
                )}
                <span className="relative z-20  ">{btn}</span>
              </button>
            ))}
          </div>

          <div
            style={{ left: `${move}%` }}
            className={`absolute bottom-0 top-0 bg-zinc-800/70 rounded-2xl transition-all duration-300 ease-in-out ${widthClass}`}
          />
        </div>

        <div className="p-4 pl-0 rounded-2xl overflow-y-auto custom-scrollbar">
          {activeTab === 0 && (
            <div className="h-[175px] font-normal text-[16px] leading-relaxed text-[#969696] pr-4">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
              <br /><br />
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters—Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9–10 AM. This is a...
            </div>
          )}
          {activeTab === 1 && (
            <div className="h-[175px] font-normal text-[16px] leading-relaxed text-[#969696] pr-4">
              Content for **Experiences** tab.
            </div>
          )}
          {activeTab === 2 && (
            <div className="h-[175px] font-normal text-[16px] leading-relaxed text-[#969696] pr-4">
              Content for **Recommended** tab.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Screen;