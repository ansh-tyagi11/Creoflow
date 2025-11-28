import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import User from "@/models/User";
import { NextResponse } from "next/server";
import connectDB from "@/db/connectDB";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export const POST = async (req) => {
    await connectDB()

    let body = await req.formData()
    body = Object.fromEntries(body)


    let checkOrderId = await Payment.findOne({ orderId: body.razorpay_order_id });
    if (!checkOrderId) {
        return NextResponse.json({ sucess: false, message: "Order Id not found" })
    }

    let user = await User.findOne({ "dashboard.username": checkOrderId.reciever })
    let forUser = user.dashboard
    const secret = forUser.razorPaySecret

    let validatePayment = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret)

    if (validatePayment) {
        const updatedPayment = await Payment.findOneAndUpdate({ orderId: body.razorpay_order_id }, { done: "true" }, { new: true })
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.reciever}?paymentdone=true`)
    }

    else {
        return NextResponse.json({ success: false, message: "Payment Verification Failed" })
    }
}