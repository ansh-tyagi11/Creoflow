"use server"
import connectDB from '@/db/connectDB';
import User from '@/models/User';

export const updateUser = async (data, email) => {
    await connectDB()
    const user = await User.findOneAndUpdate(
        { email },
        { $set: { dashboard: data } },
        { new: true, upsert: true }
    )
    const plainUser = user.toObject();
    delete plainUser._id;

    return plainUser;
}

export const getUser = async (email) => {
    await connectDB()
    const getUse = await User.findOne({ email: email })

    const object = getUse.toObject();
    delete object._id;
    console.log(object.dashboard)
    return object.dashboard;
}