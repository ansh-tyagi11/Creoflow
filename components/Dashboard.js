"use client"
import { useSession, signOut } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import './Dashboard.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [form, setForm] = useState({})

  useEffect(() => {
    console.log(session)
    if (!session) {
      alert("You must be logged in to access the dashboard.")
      router.push('/login')
    }
  }, [])

  const handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  return (
    <div>
      <Navbar />
      <div>
        <button className="signOut-btn" onClick={() => signOut()}>Sign out</button>
      </div>
      <div className="glass-containers">
        <form action="">
          <h2>Your Dashboard</h2>
          <div className="input-group">
            <input type="text" name='name' placeholder="Name" value={form.name ? form.name : ""} onChange={handelChange} />
            <label htmlFor="name">Name</label>
          </div>

          <div className="input-group">
            <input type="text" name='username' placeholder="Username" value={form.username ? form.username : ""} onChange={handelChange} />
            <label htmlFor="username">Username</label>
          </div>

          <div className="input-group">
            <input type="email" name='email' placeholder="Email" value={form.email ? form.email : ""} onChange={handelChange} />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-group">
            <input type="text" name='razorPayId' placeholder="Razorpay ID" value={form.razorPayId ? form.razorPayId : ""} onChange={handelChange} />
            <label htmlFor="razorPayId">Razorpay ID</label>
          </div>

          <div className="input-group">
            <input type="text" name='razorPaySecret' placeholder="Razorpay Secret" value={form.razorPaySecret ? form.razorPaySecret : ""} onChange={handelChange} />
            <label htmlFor="razorPaySecret">Razorpay Secret</label>
          </div>

          <button type="submit" className="login-btn">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard