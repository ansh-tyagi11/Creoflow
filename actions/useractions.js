import connectDB from '@/db/connectDB';
import User from '@/models/User';

export const updateUser = async (data, email) => {
    await connectDB()
    const user = await User.findOne({ email: email })
}