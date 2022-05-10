import React from 'react'
import { getProviders, signIn, useSession } from 'next-auth/react';
// import Navbar from '../Components/Navbar';
import { useRouter } from 'next/router';
// import Footer from '../Components/Footer';

function Home({ providers }){
    const router = useRouter();
    const { status } = useSession();
    React.useEffect(() => {
        if(status === 'authenticated') {
            router.push('/');
        }
    }, [status])
    return (
        <div className={status === 'authenticated' ? 'hidden' : 'flex flex-col'}>
            {/* <Navbar /> */}
            {/* <div className="bg-[url('https://miro.medium.com/max/1650/1*Ymq9g7SILfFIW-Z_lP4bAQ.gif')]  */}
            {/* h-screen w-full flex flex-col justify-around items-center h-screen bg-cover"> */}
                <h1 className="text-3xl text-white font-bold">Welcome</h1>
                {providers && Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <div>
                            <button className="button" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                                Sign in as Facebook
                            </button>
                        </div>
                    </div>
                ))}
            {/* </div> */}
            {/* <Footer /> */}
        </div>
    );
}
export default Home;

export async function getServerSideProps() {
    const providers = await getProviders();
    return { props: { providers } }
}