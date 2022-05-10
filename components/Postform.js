import React from 'react'
import { useSession } from 'next-auth/react';
import { RiLiveFill } from 'react-icons/ri';
import { BsImages } from 'react-icons/bs';
import { modalState } from '../atoms/index';
import { useSetRecoilState } from 'recoil';

function PostForm() {
    const setOpen = useSetRecoilState(modalState)
    const { data: session } = useSession();
    return (
    <>
        <div className="w-full px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
            <div className="p-2 border-b b  order-gray-300 dark:border-dark-third flex space-x-4">
                <img src={session?.user?.image} alt="Profile picture" className="w-10 h-10 rounded-full" />
                <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third 
                text-gray-500 text-lg dark:text-dark-txt hover:bg-gray-200" onClick={() => setOpen(true)}>
                    Whats on your mind {session?.user?.name.split(' ')[0]}?
                </div>
            </div>
            <div className="p-2 flex">
                <div className="w-1/2 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
                    <RiLiveFill />
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
                </div>
                <div onClick={() => setOpen(true)}
                className="w-1/2 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                    <BsImages />
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Photos/Videos</span>
                </div>
            </div>
        </div>
    </>
    );
}

export default PostForm;