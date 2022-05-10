import { connectToDatabase } from '../../../utils/mongodb';
import { ObjectId } from "mongodb";
import { useSession } from 'next-auth/react';

export default async function handler(req, res) {
    const { method, query: { id }, body } = req;
    const { db } = await connectToDatabase();
    switch (method) {
        case "GET":
            try {
                const posts = await db.collection('posts').findOne({ _id: new ObjectId(id) });
                res.status(200).json(posts);
            } catch (error) {
                res.status(500).json(error);
            }
        break;
        case "PUT":
            try {
                const updatedPost = await db.collection('posts').updateOne({ _id: new ObjectId(id) }, 
                { $set: { post: body.post, likeCount: likeCount + body.likeCount, likedBy: [...likedBy, body.likedBy] } })
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(500).json(error);
            }
        break;
        case "DELETE":
            try {
                await db.collection("posts").deleteOne({ _id: new ObjectId(id) });
                res.status(200).json({ message: "The post has been deleted!!" });
            } catch (error) {
                res.status(500).json(error);
            }
        break;
    }
}