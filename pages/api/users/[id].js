import { connectToDatabase } from "../../../utils/mongodb";

export default async function handleUsers (req, res) {
    const { db } = await connectToDatabase();
    const { method, query: { id } } = req;
    switch(method) {
        case "GET":
            try {
                const user = await db.collection('users').findOne({ id })
                res.status(200).json({ user });
            } catch (error) {
                res.status(404).json(error);
            }
        break;
    }
}