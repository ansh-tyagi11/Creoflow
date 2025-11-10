"use client"
import { useSession, signOut } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { redirect } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { updateUser } from '@/actions/useractions'

const Dashboard = () => {
  const { data: session, status } = useSession()
  const [form, setForm] = useState({ username: "", razorPayId: "", razorPaySecret: "" })
  const [image, setImage] = useState(true)
  const [input, setInput] = useState({ imageInput: "" })

  useEffect(() => {
    if (status === "unauthenticated") {
      alert("Please login to access the dashboard.")
      redirect('/login')
    }
  }, [status])

  const handelChange = (e) => {
    setForm({ ...form, id: uuidv4(), [e.target.name]: e.target.value })
    console.log(form)
  }

  if (!session) {
    return null;
  }

  const handelSubmit = async (e) => {
    let res = await updateUser(form, session.user.email)
    console.log(res)
  }

  const handelImage = () => {
    setImage(false)
  }

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    setInput(files.map(file => URL.createObjectURL(file)));
  };

  return (
    <>
      <div>

        <div>
          <button className="signOut-btn" onClick={() => signOut()}>Sign out</button>
        </div>
        <div className="glass-containers">
          <form action={handelSubmit}>
            <h2>Your Dashboard</h2>

            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="file:hidden"
              />
              <img className='rounded-full center h-[64px] w-[64px] object-cover m-auto' src={input} alt="" />
            </div>

            {image && (<img className='rounded-full center h-[64px] w-[64px] object-cover m-auto' src={`${session.user.image}`} alt="" />)}


            <button onClick={handelImage}>Edit</button>
            <button onClick={() => setImage(true)}>Cancel</button>

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
      </div >
    </>
  )
}

export default Dashboard