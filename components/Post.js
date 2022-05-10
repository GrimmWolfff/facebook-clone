import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { BiLike, BiComment, BiShare, BiAngry, BiHeart, BiLaugh } from 'react-icons/bi';

export default function Post({ id, likeCount, likedBy, author, authorImg, caption, photo, createdAt }) {
    const { data: session } = useSession();
    const formatTime = () => {
        let diff = Date.now() - new Date(createdAt).getTime();
        let msec = diff;
        let hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        let mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        return hh ? `${hh}h` : `${mm}min`;
    }
    const handleLike = async () => {
        if(!likedBy.includes(session.user.name)) {
            const likePost = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    likedBy: session?.user?.name,
                    likeCount: 1
                })
            })
        }
        //TODO: else unlike
    }
    const handleComment = () => {}
    const handleShare = () => {}
    return (
        <div className="shadow mt-4 rounded-lg">
            <div className="flex items-center justify-between px-4 py-2">
                <div className="flex space-x-2 items-center">
                    <div className="relative">
                        <Link href="/profile">
                            <a>
                                <img src={authorImg} alt="Profile picture" className="w-10 h-10 rounded-full"/>
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/profile">
                            <a>
                                <div className="font-semibold">
                                    { author }
                                </div>
                            </a>
                        </Link>
                        <span className="text-sm text-gray-500">{formatTime()}</span>
                    </div>
                </div>
                <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer">
                    <i className='bx bx-dots-horizontal-rounded'></i>
                </div>
            </div>

            <div className="text-justify px-4 py-2">
                {caption}
            </div>

            <div className={`${photo ? 'flex' : 'hidden'} py-2`}>
                <img src={photo} alt="Post image"/>
            </div>

            <div className="px-4 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex flex-row-reverse items-center">
                        <span className="ml-2 text-gray-500 dark:text-dark-txt">999</span>
                        <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-800">
                            <BiAngry />
                        </span>
                        <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-500">
                            <BiHeart />
                        </span>
                        <span className="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500">
                            <BiLaugh />
                        </span>
                    </div>
                    <div className="text-gray-500 dark:text-dark-txt">
                        <span>90 comments</span>
                        &nbsp;
                        <span>66 Shares</span>
                    </div>
                </div>
            </div>

            <div className="py-2 px-4">
                <div className="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
                    <div className="flex space-x-2">
                        <div onClick={() => handleLike()} 
                        className="w-1/3 flex space-x-2 justify-center items-center 
                        hover:bg-gray-200 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                            <BiLike />
                            <span className="text-sm font-semibold">Like</span>
                        </div>
                        <div onClick={() => handleComment()} 
                        className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-200 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                            <BiComment />
                            <span className="text-sm font-semibold">Comment</span>
                        </div>
                        <div onClick={() => handleShare()} 
                        className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-200 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                            <BiShare />
                            <span className="text-sm font-semibold">Share</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-2 px-4">
                <div className="flex space-x-2">
                    <img src="./images/avt-5.jpg" alt="Profile picture" className="w-9 h-9 rounded-full"/>
                    <div>
                        <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                            <span className="font-semibold block">John Doe</span>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                        <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                            <span className="font-semibold cursor-pointer">Like</span>
                            <span>.</span>
                            <span className="font-semibold cursor-pointer">Reply</span>
                            <span>.</span>
                            10m
                        </div>
                        <div className="flex space-x-2">
                            <img src="./images/avt-7.jpg" alt="Profile picture" className="w-9 h-9 rounded-full"/>
                            <div>
                                <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                                    <span className="font-semibold block">John Doe</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                                <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                                    <span className="font-semibold cursor-pointer">Like</span>
                                    <span>.</span>
                                    <span className="font-semibold cursor-pointer">Reply</span>
                                    <span>.</span>
                                    10m
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <img src="./images/avt-5.jpg" alt="Profile picture" className="w-9 h-9 rounded-full"/>
                    <div>
                        <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                            <span className="font-semibold block">John Doe</span>
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In voluptate ipsa animi corrupti unde, voluptatibus expedita suscipit, itaque, laudantium accusantium aspernatur officia repellendus nihil mollitia soluta distinctio praesentium nulla eos?</span>
                        </div>
                        <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                            <span className="font-semibold cursor-pointer">Like</span>
                            <span>.</span>
                            <span className="font-semibold cursor-pointer">Reply</span>
                            <span>.</span>
                            10m
                        </div>
                        <div className="flex space-x-2">
                            <img src="./images/avt-7.jpg" alt="Profile picture" className="w-9 h-9 rounded-full"/>
                            <div>
                                <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                                    <span className="font-semibold block">John Doe</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                                <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                                    <span className="font-semibold cursor-pointer">Like</span>
                                    <span>.</span>
                                    <span className="font-semibold cursor-pointer">Reply</span>
                                    <span>.</span>
                                    10m
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-2 px-4">
                <div className="flex space-x-2">
                    <img src={session?.user?.image} alt="Profile picture" className="w-9 h-9 rounded-full"/>
                    <div className="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                        <input type="text" placeholder="Write a comment..." className="outline-none bg-transparent flex-1"/>
                        <div className="flex space-x-0 items-center justify-center">
                            <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i className='bx bx-smile'></i></span>
                            <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i className='bx bx-camera'></i></span>
                            <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i className='bx bxs-file-gif'></i></span>
                            <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i className='bx bx-happy-heart-eyes'></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
