"use client"
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { redirect } from 'next/navigation'
import { updateUser } from '@/actions/useractions'

const Dashboard = () => {
  const { data: session, status } = useSession()
  const [form, setForm] = useState({ username: "", bio: "", razorPayId: "", razorPaySecret: "" })

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect('/login')
    }
  }, [status])

  const handelChange = (e) => {
    setForm({ ...form,[e.target.name]: e.target.value })
    console.log(form)
  }

  if (!session) {
    return null;
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    let res = await updateUser(form, session.user.email)
    console.log(res)
  }

  return (
    <>
      <div>

        <div className="glass-containers">
          <form onSubmit={handelSubmit}>
            <h2>Your Dashboard</h2>

            <div className='input-group flex flex-col justify-centre items-center relative'>
              <img className='rounded-full center h-[100px] w-[100px] object-cover m-auto' src={session.user.image} alt="" />
              <div className="text-white opacity-70">{`${session.user.name}`}</div>
              <div className="text-white opacity-70">{`${session.user.email}`}</div>
            </div>

            <div className="input-group">
              <input type="username" name='username' placeholder="Username" value={form.username} onChange={handelChange} required />
              <label htmlFor="username">Username</label>
            </div>

            <div className="input-group">
              <input type="text" name='bio' placeholder="Bio" value={form.bio} onChange={handelChange} required />
              <label htmlFor="bio">Bio</label>
            </div>

            <div className="input-group">
              <input type="text" name='razorPayId' placeholder="Razorpay ID" value={form.razorPayId} onChange={handelChange} required />
              <label htmlFor="razorPayId">Razorpay ID</label>
            </div>

            <div className="input-group">
              <input type="text" name='razorPaySecret' placeholder="Razorpay Secret" value={form.razorPaySecret} onChange={handelChange} required />
              <label htmlFor="razorPaySecret">Razorpay Secret</label>
            </div>

            <button type="submit" className="login-btn">Submit</button>
          </form>
        </div>
      </div >
    </>
  )
}

export default Dashboard