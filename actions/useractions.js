"use server"
import connectDB from '@/db/connectDB';
import User from '@/models/User';

export const updateUser = async (data, email) => {
    await connectDB()
    const user = await User.findOneAndUpdate(
        { email },
        {$set: { dashboard: data}},
        { new: true, upsert: true, strict: false }
    )
    const plainUser = user.toObject();
    delete plainUser._id;

    return plainUser;
}
