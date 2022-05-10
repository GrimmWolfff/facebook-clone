import React from 'react'
import { getProviders, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function HomePage({ providers }){
    const router = useRouter();
    const { status } = useSession();
    console.log(status)
    return (
        <div className={`${status === 'authenticated' ? 'hidden' : 'flex flex-col'} 
        w-full h-screen bg-blue-500 justify-around items-center`}>
                <h1 className="text-3xl text-white font-bold">Welcome</h1>
                {providers && Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button className="button" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                            Sign in as Facebook
                        </button>
                    </div>
                ))}
        </div>
    );
}
export async function getServerSideProps() {
    const providers = await getProviders();
    return { props: { providers } }
}