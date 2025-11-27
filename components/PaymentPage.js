"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import { initiate } from '@/actions/useractions';
import { useParams } from "next/navigation"
import { useState } from "react"
import { getUserForSearch, getUserForPayment } from "@/actions/useractions";

const PaymentPage = () => {

  const { username } = useParams()
  const [paymentForm, setPaymentForm] = useState({ username: "", message: "", amount: "" })
  const [currentUser, setCurrentUser] = useState({})
  const [image, setImage] = useState({})
  const [paymentsInfo, setPaymentsInfo] = useState({})

  const handleChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    if (!currentUser.username) {
      const userData = await getUserForSearch(username);
      setCurrentUser(userData.dashboard);
      setImage(userData.image);

      const userDataPayment = await getUserForPayment(username);
  
      setPaymentsInfo(userDataPayment);
    }
  };

  const openRazorpay = async (amount) => {
    let a = await initiate(amount, paymentForm, currentUser.username);
    let orderId = a.id;
    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount,
      currency: "INR",
      name: `${currentUser.username}`,
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId,
      callback_url: "http://localhost:3000/api/razorpay",
      prefill: {
        name: "User",
        email: "user@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <main className="text-white min-h-screen py-16 px-6 flex flex-col items-center">

        <section className="w-full max-w-3xl backdrop-blur-2xl bg-white/10 border border-white/40 shadow-2xl rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 mb-10" style={{ boxShadow: "0 25px 45px rgba(0, 0, 0, 0.4)" }} >
          <img
            src={`${image}`}
            alt="Profile Picture"
            className="w-28 h-28 rounded-full object-cover border-2 border-white/50 shadow-md" />
          <div className="text-center sm:text-left">

            <h2 className="text-3xl font-bold mb-1">{currentUser.username}</h2>
            <span className="text-white/80 mb-1"></span>

          </div>
        </section>

        <section className="w-full max-w-3xl backdrop-blur-xl bg-white/10 border border-white/40 rounded-2xl shadow-lg p-6 mb-10 text-center sm:text-left" style={{ boxShadow: "0 25px 45px rgba(0, 0, 0, 0.4)" }}>

          <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">
            About
          </h3>

          <p className="text-white mb-4">{currentUser.about}</p>

        </section>

        <section className="w-full max-w-3xl backdrop-blur-xl bg-white/10 border border-white/40 rounded-2xl shadow-lg p-6 mb-10" style={{ boxShadow: "0 25px 45px rgba(0, 0, 0, 0.4)" }} >

          <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-lg">
            Messages
          </h3>

          {paymentsInfo && paymentsInfo.length > 0 ? (
            paymentsInfo.map((info, index) => (
              <div key={index} className="space-y-3">
                <div className="p-4 mb-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all shadow-sm">
                  <p className="font-medium text-white/90">{info.name}</p>
                  <p className="font-medium text-white/90">{info.name} donated <span className='font-bold'>₹{info.amount}</span> with a message &quot;{info.message}&quot;</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No payments found</p>
          )}

        </section>

        <section className="w-full max-w-3xl backdrop-blur-xl bg-white/10 border border-white/40 rounded-2xl shadow-lg p-6 mb-10" style={{ boxShadow: "0 25px 45px rgba(0, 0, 0, 0.4)" }}>

          <h3 className="text-xl text-centre font-semibold mb-4 text-white drop-shadow-lg">Donate</h3>

          <div className="relative z-10 space-y-6">

            <div className="relative">

              <label className="relative top-[10px] left-[22px]  text-[12px]" htmlFor="username" > Name </label>

              <input
                type="text"
                name="username"
                placeholder="Name"
                value={paymentForm.username}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-full bg-white/20 border-none outline-none text-white placeholder-white/70 shadow-md focus:bg-white/30 focus:shadow-lg transition-all duration-300"
              />
            </div>

            <div className="relative">

              <label className="relative top-[10px] left-[22px] text-[12px]" htmlFor="message" >Message</label>

              <input
                type="text"
                name="message"
                placeholder="Message"
                value={paymentForm.message}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-full bg-white/20 border-none outline-none text-white placeholder-white/70 shadow-md focus:bg-white/30 focus:shadow-lg transition-all duration-300" />
            </div>

            <div className="relative">

              <label className="relative top-[10px] left-[22px] text-[12px]"
                htmlFor="amount">Amount</label>

              <input
                type="text"
                name="amount"
                placeholder="Amount"
                value={paymentForm.amount}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-full bg-white/20 border-none outline-none text-white placeholder-white/70 shadow-md focus:bg-white/30 focus:shadow-lg transition-all duration-300" />

            </div>

            <button className="w-full py-3 rounded-full bg-white/30 text-white font-semibold tracking-wide hover:bg-white/40 transition-all duration-300 shadow-md hover:-translate-y-[2px]" onClick={() => openRazorpay(Number.parseInt(paymentForm.amount) * 100)} id="rzp-button1" disabled={paymentForm.username?.length < 3 || paymentForm.message?.length < 4 || paymentForm.amount?.length < 1}>Pay</button>

            <div className="flex w-full text-center gap-2.5">

              <button className="w-full py-3 rounded-full bg-white/30 text-white font-semibold tracking-wide hover:bg-white/40 transition-all duration-300 shadow-md hover:-translate-y-[2px]" onClick={() => openRazorpay(1000)}>₹10</button>

              <button className="w-full py-3 rounded-full bg-white/30 text-white font-semibold tracking-wide hover:bg-white/40 transition-all duration-300 shadow-md hover:-translate-y-[2px]" onClick={() => openRazorpay(2000)}>₹20</button>

              <button className="w-full py-3 rounded-full bg-white/30 text-white font-semibold tracking-wide hover:bg-white/40 transition-all duration-300 shadow-md hover:-translate-y-[2px]" onClick={() => openRazorpay(3000)}>₹30</button>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentPage;
