import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
function Stories() {
    const { data: session } = useSession();
    return (
        //!ml დასაყენებელია xs lg xl md:ml-[65%] sm:ml-0
        <div className="relative flex space-x-2 pt-4 w-full">
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl shadow overflow-hidden flex flex-col group cursor-pointer">
                <div className="h-3/5 overflow-hidden">
                </div>
                <div className="flex-1 relative flex items-end justify-center pb-2 text-center leading-none dark:bg-dark-second dark:text-dark-txt">
                    <span className="font-semibold">
                        Create a <br/> Story
                    </span>
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white grid place-items-center text-2xl border-4 border-white dark:border-dark-second absolute -top-5 left-1/2 transform -translate-x-1/2">
                        <i className='bx bx-plus'></i>
                    </div>
                </div>
            </div>
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                <div className="relative h-full group cursor-pointer">
                    <img src="./images/story.jpg" alt="Story images" className="group-hover:transform group-hover:scale-110
                    transition-all duration-700 h-full w-full" />
                    <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                    <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                        Your story
                    </span>
                    <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                        <img src="./images/tuat.jpg" alt="Profile picture"/>
                    </div>
                </div>
            </div>
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                <div className="relative h-full group cursor-pointer">
                    <img src="./images/story-1.jpg" alt="Story images" className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"/>
                    <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                    <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                        Lorem
                    </span>
                    <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                        <img src="./images/avt-7.jpg" alt="Profile picture"/>
                    </div>
                </div>
            </div>
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                <div className="relative h-full group cursor-pointer">
                    <img src="./images/story-1.jpg" alt="Story images" 
                    className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"/>
                    <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                    <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                        Levan pilpani
                    </span>
                    <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                        <img src="./images/avt-6.png" alt="Profile picture"/>
                    </div>
                </div>
            </div>
            <div className="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                <div className="relative h-full group cursor-pointer">
                    <img src="./images/story-3.jpg" alt="Story images" className="group-hover:transform 
                    group-hover:scale-110 transition-all duration-700 h-full w-full"/>
                    <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                    <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                    Levan pilpani
                    </span>
                    <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                        <img src="./images/avt-6.png" alt="Profile picture"/>
                    </div>
                </div>
            </div>
            <div className="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                <div className="relative h-full group cursor-pointer">
                    <img src="./images/story-4.jpg" alt="Story images" className="group-hover:transform 
                    group-hover:scale-110 transition-all duration-700 h-full w-full"/>
                    <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                    <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                    Levan pilpani
                    </span>
                    <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                        <img src="./images/avt-5.jpg" alt="Profile picture"/>
                    </div>
                </div>
            </div>
            <div className="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl bg-white absolute -right-6 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow text-gray-500 dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
                <AiOutlineArrowRight />
            </div>
        </div>
    )
}

export default Stories