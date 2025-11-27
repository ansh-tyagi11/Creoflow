"use server";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";

export const updateUser = async (data, email) => {
  await connectDB();
  const user = await User.findOneAndUpdate(
    { email },
    { $set: { dashboard: data } },
    { new: true, upsert: true }
  );
  const plainUser = user.toObject();
  delete plainUser._id;

  return plainUser;
};

export const getUser = async (email) => {
  await connectDB();
  const getUse = await User.findOne({ email: email });

  const object = getUse.toObject();
  delete object._id;
 
  return object.dashboard;
};

export const getUserForSearch = async (username) => {
  await connectDB();

  const userDocument = await User.findOne({ "dashboard.username": username });
  const user = userDocument.toObject();

  delete user._id;

  return user;
};

export const getUserForPayment = async (username) => {
  await connectDB();

  const userDocument = await Payment.find({ reciever: username }).sort({ amount: -1 }).limit(10).lean();

  return userDocument;
};

export const initiate = async (amount, paymentForm, toPayment) => {
  var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET })

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  let paymentOptions = await instance.orders.create(options);

  await Payment.create({
    reciever: toPayment,
    name: paymentForm.username,
    orderId: paymentOptions.id,
    message: paymentForm.message,
    amount: paymentForm.amount
  });
  return paymentOptions;
};