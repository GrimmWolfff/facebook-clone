import React from 'react'
import { BsFillMoonFill, BsMessenger, BsSearch, BsLayoutTextSidebarReverse } from 'react-icons/bs'; 
import { BiHomeAlt, BiMoviePlay, BiStoreAlt, BiGroup, BiMenu } from 'react-icons/bi'; 
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'next-auth/react';
export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-dark-second h-max md:h-14 w-full shadow flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 border-b dark:border-dark-third">

        <div className="flex items-center justify-between w-full md:w-max px-4 py-2">
            <a href="#" className="mr-2 hidden md:inline-block">
                <img src="./images/fb-logo.png" alt="Facebook logo" className="w-24 sm:w-20 lg:w-10 h-auto" />
            </a>
            <a href="#" className="inline-block md:hidden">
                <img src="./images/fb-logo-mb.png" alt="" className="w-32 h-auto" />
            </a>
            <div className="flex items-center justify-between space-x-1">
                <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-10 h-10 sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
                    <BsSearch />
                    &nbsp;&nbsp;
                    <input type="text" placeholder="Search Facebook" className="outline-none bg-transparent
                    hidden xl:inline-block" />
                </div>
                <div className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt">
                    <BsMessenger />
                </div>
                <div className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt" id="dark-mode-toggle-mb">
                    <BsFillMoonFill />
                </div>
            </div>
        </div>

        <ul className="flex w-full lg:w-max items-center justify-center">
            <li className="w-1/6 md:w-max text-center">
                <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block text-blue-500 border-b-4 border-blue-500">
                    <BiHomeAlt />
                </a>
            </li>
            <li className="w-1/6 md:w-max text-center">
                <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative">
                    <BiMoviePlay />
                    <span className="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">9+</span>
                </a>
            </li>
            <li className="w-1/6 md:w-max text-center">
                <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative">
                    <BiStoreAlt />
                </a>
            </li>
            <li className="w-1/6 md:w-max text-center">
                <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative">
                    <BiGroup />
                </a>
            </li>
            <li className="w-1/6 md:w-max text-center inline-block md:hidden">
                <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative">
                    <BiMenu />
                </a>
            </li>
            <li onClick={() => signOut()} className="w-1/6 md:w-max text-center hidden md:inline-block">
                <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative">
                    <FaSignOutAlt />
                </a>
            </li>
        </ul>
        </nav>
    )
}
