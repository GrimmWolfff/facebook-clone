import NextAuth from 'next-auth';
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';

export default NextAuth({
    providers: [
        FacebookProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        })
    ],
    secret: process.env.JWT_SECRET, 
    adapter: MongoDBAdapter(clientPromise),
    pages: {
        signIn: "/",
    },
    session: {
        strategy: "jwt"
    }
})