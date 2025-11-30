"use server";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";

export const updatedUserProfile = async (data, email) => {
  await connectDB();

  const oldUser = await User.findOne({ email });
  if (!oldUser) return { error: "User not found" };

  const oldUsername = oldUser.dashboard.username;
  const newUsername = data.username;

  if (oldUsername !== newUsername) {

    const existingUser = await User.findOne({
      "dashboard.username": newUsername,
      email: { $ne: email }
    });

    if (existingUser) {
      return null;
    }

    await User.updateOne({ email }, { $set: { dashboard: data } });

    await Payment.updateMany(
      { reciever: oldUsername },
      { $set: { reciever: newUsername } }
    );

    return { success: true };
  }

  await User.updateOne({ email }, { $set: { dashboard: data } });

  return { success: true };
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
  if (!userDocument) {
    return null;
  }
  const user = userDocument.toObject();

  delete user._id;

  return user;
};

export const getUserForPayment = async (username) => {
  await connectDB();

  const userDocument = await Payment.find({ reciever: username, done: true }).sort({ amount: -1 }).limit(5).lean();

  return userDocument;
};

export const initiate = async (amount, paymentForm, toPayment) => {
  await connectDB()
  let user = await User.findOne({ "dashboard.username": toPayment })
  let forUser = user.dashboard

  let secret = forUser.razorPaySecret

  var instance = new Razorpay({ key_id: forUser.razorPayId, key_secret: secret })

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