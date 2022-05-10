//* POST ADD FUNCTIONALITY
//* Post Feed
// TODO: My profile page
// TODO: CRUD operations for post
//! Fix modal issue

import React from 'react'
import Head from 'next/head';
import { getSession } from 'next-auth/react';
import Navbar from '../components/Navbar'
import Leftmenu from '../components/Leftmenu'
import Stories from '../components/Stories';
import RightMenu from '../components/RightMenu';
import PostForm from '../components/Postform';
import Rooms from '../components/Rooms';
import Modal from '../components/Modal';
import Post from '../components/Post';
import { connectToDatabase } from '../utils/mongodb';

export default function Home({ posts }) {
    return (
        <div className={`bg-gray-100 dark:bg-dark-main overflow-y-scroll min-h-screen w-full`}>
            <Head>
                <title>Facebook</title>
            </Head>
            <Navbar />
            <div className="flex flex-row justify-between items-center w-full
            pt-32 lg:pt-16 px-2">
                <div className="w-1/5 bg-green-900 h-full">
                    <Leftmenu />
                </div>
                <div className="w-3/5 flex flex-col items-center justify-around">
                    <Stories />
                    <PostForm />
                    <Modal />
                    <Rooms />
                    {posts.map((post, idx) => (
                        <Post likedBy={post.likedBy} author={post.author} caption={post.caption} authorImg={post.authorImg}
                        photo={post.photo} createdAt={post.createdAt} key={idx} id={post._id}/>
                    ))}
                </div>
                <div className="w-1/5 h-full">
                    <RightMenu />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { db } = await connectToDatabase();
    const posts = await db.collection("posts").find().sort({ timestamp: -1 }).toArray();
    const session = await getSession(context);
    if(!session) {
        return {
            permanent: false,
            destination: '/home'
        }
    }
    return { props: {
        session,
        posts: posts.map((post) => ({
            _id: post._id.toString(),
            author: post.author,
            caption: post.caption,
            authorImg: post.authorImg,
            createdAt: post.createdAt,
            photo: post.photo
        })),
    } }
}