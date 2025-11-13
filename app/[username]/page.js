"use client"
import React from "react"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function UserProfile() {
  const { username } = useParams()
  const [paymentForm, setPaymentForm] = useState({ username: "", message: "", amount: "" })

  const handleChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
    console.log(paymentForm)
  }

  return (
    <main className="text-white min-h-screen py-16 px-6 flex flex-col items-center">

      <section
        className="w-full max-w-3xl backdrop-blur-2xl bg-white/10 border border-white/40 shadow-2xl rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 mb-10"
        style={{ boxShadow: "0 25px 45px rgba(0, 0, 0, 0.4)" }} >
        <img
          src="https://avatars.githubusercontent.com/u/64288578?v=4"
          alt="Profile Picture"
          className="w-28 h-28 rounded-full object-cover border-2 border-white/50 shadow-md" />
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold mb-1">Ansh Tyagi</h2>
          <span className="text-white/80 mb-1"></span>
        </div>
      </section>

      <section className="w-full max-w-3xl backdrop-blur-xl bg-white/10 border border-white/40 rounded-2xl shadow-lg p-6 mb-10 text-center sm:text-left"
        style={{ boxShadow: "0 25px 45px rgba(0, 0, 0, 0.4)" }}>
        <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">
          About
        </h3>
        <p className="text-white mb-4">Full Stack Developer | Learning, Building, and Breaking things 🚀</p>
      </section>

      <section className="w-full max-w-3xl backdrop-blur-xl bg-white/10 border border-white/40 rounded-2xl shadow-lg p-6 mb-10"
        style={{ boxShadow: "0 25px 45px rgba(0, 0, 0, 0.4)" }}>
        <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-lg">
          Messages
        </h3>

        <div className="space-y-3">

          <div className="p-4 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all shadow-sm">
            <p className="font-medium text-white/90">msg.from</p>
            <p className="text-white">msg.text</p>
          </div>

          <div className="p-4 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all shadow-sm">
            <p className="font-medium text-white/90">msg.from</p>
            <p className="text-white">msg.text</p>
          </div>

          <div className="p-4 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all shadow-sm">
            <p className="font-medium text-white/90">msg.from</p>
            <p className="text-white">msg.text</p>
          </div>

          <div className="p-4 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all shadow-sm">
            <p className="font-medium text-white/90">msg.from</p>
            <p className="text-white">msg.text</p>
          </div>

          <div className="p-4 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all shadow-sm">
            <p className="font-medium text-white/90">msg.from</p>
            <p className="text-white">msg.text</p>
          </div>

        </div>
      </section >

      <section className="w-full max-w-3xl backdrop-blur-xl bg-white/10 border border-white/40 rounded-2xl shadow-lg p-6 mb-10"
        style={{ boxShadow: "0 25px 45px rgba(0, 0, 0, 0.4)" }} >
        <h3 className="text-xl text-centre font-semibold mb-4 text-white drop-shadow-lg">
          Donate
        </h3>

        <form className="relative z-10 space-y-6">

          <div className="relative">
            <label className="relative top-[10px] left-[22px]  text-[12px]" htmlFor="username">Name</label>
            <input
              type="text"
              name="username"
              placeholder="Name"
              value={paymentForm.username}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-full bg-white/20 border-none outline-none text-white placeholder-white/70 shadow-md focus:bg-white/30 focus:shadow-lg transition-all duration-300"
              required
            />
          </div>

          <div className="relative">
            <label className="relative top-[10px] left-[22px] text-[12px]" htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={paymentForm.message}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-full bg-white/20 border-none outline-none text-white placeholder-white/70 shadow-md focus:bg-white/30 focus:shadow-lg transition-all duration-300"
              required
            />
          </div>

          <div className="relative">
            <label className="relative top-[10px] left-[22px] text-[12px]" htmlFor="amount">Amount</label>
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              value={paymentForm.amount}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-full bg-white/20 border-none outline-none text-white placeholder-white/70 shadow-md focus:bg-white/30 focus:shadow-lg transition-all duration-300"
              required
            />
          </div>

          <button className="w-full py-3 rounded-full bg-white/30 text-white font-semibold tracking-wide hover:bg-white/40 transition-all duration-300 shadow-md hover:-translate-y-[2px]">Pay</button>

          <div className="flex w-full text-center gap-2.5">
            <button className="w-full py-3 rounded-full bg-white/30 text-white font-semibold tracking-wide hover:bg-white/40 transition-all duration-300 shadow-md hover:-translate-y-[2px]">₹10</button>
            <button className="w-full py-3 rounded-full bg-white/30 text-white font-semibold tracking-wide hover:bg-white/40 transition-all duration-300 shadow-md hover:-translate-y-[2px]">₹20</button>
            <button className="w-full py-3 rounded-full bg-white/30 text-white font-semibold tracking-wide hover:bg-white/40 transition-all duration-300 shadow-md hover:-translate-y-[2px]">₹30</button>
          </div>
        </form>

      </section >
    </main >
  )
}