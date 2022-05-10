import React from 'react'
import { AiOutlineArrowRight, AiOutlineVideoCameraAdd } from 'react-icons/ai';
export default function Rooms() {
    return (
        <div className="w-full p-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second overflow-hidden">
            <div className="flex space-x-4 relative">
                <div className="w-1/2 lg:w-3/12 flex space-x-2 items-center justify-center border-2 border-blue-200 dark:border-blue-700 rounded-full cursor-pointer">
                    <AiOutlineVideoCameraAdd />
                    <span className="text-sm font-semibold text-blue-500">Create Room</span>
                </div>
                <div className="relative cursor-pointer">
                    <img src="./images/avt-3.jpg" alt="Profile picture" className="rounded-full" />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                </div>
                <div className="relative cursor-pointer">
                    <img src="./images/avt-4.jpg" alt="Profile picture" className="rounded-full" />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                </div>
                <div className="relative cursor-pointer">
                    <img src="./images/avt-5.jpg" alt="Profile picture" className="rounded-full" />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                </div>
                <div className="relative cursor-pointer">
                    <img src="./images/avt-2.jpg" alt="Profile picture" className="rounded-full" />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                </div>
                <div className="relative cursor-pointer hidden sm:inline">
                    <img src="./images/avt-3.jpg" alt="Profile picture" className="rounded-full" />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                </div>
                <div className="relative cursor-pointer hidden sm:inline">
                    <img src="./images/avt-4.jpg" alt="Profile picture" className="rounded-full" />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                </div>
                <div className="relative cursor-pointer hidden sm:inline">
                    <img src="./images/avt-5.jpg" alt="Profile picture" className="rounded-full" />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                </div>
                <div className="relative cursor-pointer hidden sm:inline">
                    <img src="./images/avt-7.jpg" alt="Profile picture" className="rounded-full" />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                </div>
                <div className="relative cursor-pointer hidden sm:inline">
                    <img src="./images/avt-3.jpg" alt="Profile picture" className="rounded-full" />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                </div>
                <div className="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl text-gray-500 bg-white absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
                    <AiOutlineArrowRight />
                </div>
            </div>
        </div>
    )
}
