import React, { useState, useEffect } from 'react';
import { FaQuestionCircle, FaTh, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const NEUMORPHIC_SHADOW = '0px_3.26px_3.26px_0px_#FFFFFF26_inset,0px_0px_48.91px_0px_#FFFFFF0D_inset,9px_10px_7.1px_0px_#00000066,-0.5px_-0.5px_6.9px_0px_#FFFFFF40';

const Gallery = () => {
    const [images, setImages] = useState([
        '/image1.jpg',
        '/image1.jpg',
        '/image1.jpg',
        '/image1.jpg',
        '/image1.jpg',
        '/image1.jpg',

    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleImages = images.slice(currentIndex, currentIndex + 3);
    const hasMoreImagesRight = currentIndex + 3 < images.length;
    const hasMoreImagesLeft = currentIndex > 0;

    const handleNext = () => {
        if (hasMoreImagesRight) {
            setCurrentIndex(prevIndex => prevIndex + 3);
        }
    };

    const handlePrev = () => {
        if (hasMoreImagesLeft) {
            setCurrentIndex(prevIndex => prevIndex - 3);
        }
    };

    const handleAddImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImageUrl = URL.createObjectURL(file);

            setImages(prevImages => [newImageUrl, ...prevImages]);

            setCurrentIndex(0);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex, images.length]);

    return (
        <div className="max-w-xl flex mx-auto p-4 rounded-xl shadow-2xl w-[720px]  h-[316px] bg-[#363C43]">

            <div className="flex flex-col items-center justify-between h-[159.69px] p-2 mr-4 rounded-lg bg-custom-gradient">
                <FaQuestionCircle className="text-white w-6 h-6" />
                <FaTh className="text-white w-6 h-6" />
            </div>

            <div className="flex flex-col flex-grow ">

                <div className="flex items-center justify-between mb-4  w-[500px]">

                    <div className="w-[120px] h-[40px] rounded-xl flex items-center justify-center bg-black/50 p-2">
                        <span className="font-medium font-[Poppins] text-[20px] leading-none text-white">Gallery</span>
                    </div>

                    <div className="flex items-center space-x-4">

                        {/* Add Image Button */}
                        <label
                            className={`w-[150px] h-[40px] px-4 py-2 rounded-full cursor-pointer text-white bg-[#4A4E54] font-medium 
                                flex items-center justify-center space-x-1 [box-shadow:${NEUMORPHIC_SHADOW}]`}
                        >
                            <span className="text-lg">+ ADD IMAGE</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleAddImage}
                                className="hidden"
                            />
                        </label>

                        {/* Navigation Arrows */}
                        <div className="flex gap-2">
                            {/* Left Arrow Button */}
                            <div
                                onClick={handlePrev}
                                className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#4A4E54] cursor-pointer 
                                    ${hasMoreImagesLeft ? 'opacity-100 [box-shadow:inset_3px_3px_5px_#2c2f33,inset_-3px_-3px_5px_#686e75]' : 'opacity-40 cursor-default'}`}
                            >
                                <FaArrowLeft className="text-white w-4 h-4" />
                            </div>
                            {/* Right Arrow Button */}
                            <div
                                onClick={handleNext}
                                className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#4A4E54] cursor-pointer 
                                    ${hasMoreImagesRight ? 'opacity-100 [box-shadow:inset_3px_3px_5px_#2c2f33,inset_-3px_-3px_5px_#686e75]' : 'opacity-40 cursor-default'}`}
                            >
                                <FaArrowRight className="text-white w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* === IMAGE GRID === */}
                <div className="w-[500px] overflow-x-scroll no-scrollbar custom-scrollbar h-[200px]">
                    <div
                        className="flex transition-transform duration-300 space-x-4 h-[250px] p-5"
                        style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
                    >
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="group  w-[160px] h-[160px] flex-shrink-0 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-gray-900"
                            >
                                <img
                                    src={img}
                                    alt={`gallery-${index}`}
                                  
                                    className="w-full h-full object-cover 
                               rounded-xl grayscale 
                               group-hover:grayscale-0 
                               transform transition-all duration-1000 ease-out
                               group-hover:-rotate-4
                               group-hover:shadow-lg group-hover:shadow-black/40
                               group-hover:scale-110
                               group-hover:-h-[200px]" 
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Gallery;