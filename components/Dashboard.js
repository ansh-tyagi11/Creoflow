"use client"
import { useSession, signOut } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { redirect } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import User from '@/models/User'
import connectDB from '@/db/connectDB'

const Dashboard = () => {
  const { data: session, status } = useSession()
  const [form, setForm] = useState({ username: "", razorPayId: "", razorPaySecret: "" })

  useEffect(() => {
    if (status === "unauthenticated") {
      alert("Please login to access the dashboard.")
      redirect('/login')
    }
  }, [status])

  const handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  if (!session) {
    return null;
  }

  const submit = async (e) => {
    e.preventDefault();
    let newEntry = {
      id: uuidv4(),
      form: {
        username: form.username,
        razorPayId: form.razorPayId,
        razorPaySecret: form.razorPaySecret
      }
    };

    const payload = {
      id: newEntry.id,
      form: {
        username: form.username,
        razorPayId: form.razorPayId,
        razorPaySecret: form.razorPaySecret
      }
    };
    console.log(payload)
    onSubmit(payload)
  }


  const onSubmit = async (data) => {

    let r = await fetch("/api/dashboard/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    let res = await r.text()
  }

  return (
    <div>
      <div>
        <button className="signOut-btn" onClick={() => signOut()}>Sign out</button>
      </div>
      <div className="glass-containers">
        <form onSubmit={submit}>
          <h2>Your Dashboard</h2>
          <div className="input-group">
            <input type="text" name='name' placeholder="Name" value={`${session.user.name}`} onChange={handelChange} />
            <label htmlFor="name">Name</label>
          </div>

          <div className="input-group">
            <input type="username" name='username' placeholder="Username" value={form.username} onChange={handelChange} />
            <label htmlFor="username">Username</label>
          </div>

          <div className="input-group">
            <input type="email" name='email' placeholder="Email" value={`${session.user.email}`} onChange={handelChange} readOnly />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-group">
            <input type="text" name='razorPayId' placeholder="Razorpay ID" value={form.razorPayId} onChange={handelChange} />
            <label htmlFor="razorPayId">Razorpay ID</label>
          </div>

          <div className="input-group">
            <input type="text" name='razorPaySecret' placeholder="Razorpay Secret" value={form.razorPaySecret} onChange={handelChange} />
            <label htmlFor="razorPaySecret">Razorpay Secret</label>
          </div>

          <button type="submit" className="login-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard