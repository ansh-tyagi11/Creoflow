import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import { NextResponse } from "next/server";
import connectDB from "@/db/connectDB";

export const POST = async (req) => {
    await connectDB()
}