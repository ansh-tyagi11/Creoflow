"use server"
import connectDB from '@/db/connectDB';
import User from '@/models/User';
import Razorpay from 'razorpay';
import Payment from '@/models/Payment';

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

export const initiate = async (amount, paymentForm) => {
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let paymentOptions = await instance.orders.create(options)

    await Payment.create({
        name: paymentForm.username,
        oid: paymentOptions.id,
        message: paymentForm.message,
        amount: paymentForm.amount
    })

    return paymentOptions;
}