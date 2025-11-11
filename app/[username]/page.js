// "use client"
// import React from 'react'
// // import { useSession } from 'next-auth/react'

// const page = () => {
//     // const { data: session } = useSession()
//     return (
//         <div className="p-6 space-y-6 max-w-3xl mx-auto">

//             <div className="flex items-center space-x-4 p-4 border rounded-xl shadow-sm">
//                 <img
//                     // src={session.user.image}
//                     // alt={user.name}
//                     className="w-20 h-20 rounded-full object-cover"
//                 />
//                 <div>
//                     <h2 className="text-2xl font-bold">{user.name}</h2>
//                     <p className="text-gray-500">{user.email}</p>
//                     <p className="text-sm text-gray-400 mt-1">Joined: {user.joined}</p>
//                 </div>
//             </div>

//             {/* Details */}
//             <div className="border rounded-xl p-4 shadow-sm">
//                 <h3 className="text-lg font-semibold mb-2">Details</h3>
//                 <p>{user.bio}</p>
//                 <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
//                     Edit Profile
//                 </button>
//             </div>

//             {/* Messages */}
//             <div className="border rounded-xl p-4 shadow-sm">
//                 <h3 className="text-lg font-semibold mb-3">Messages</h3>
//                 {messages.map((msg) => (
//                     <div
//                         key={msg.id}
//                         className="p-3 mb-2 rounded-lg bg-gray-50 border last:mb-0"
//                     >
//                         <p className="font-medium">{msg.from}</p>
//                         <p>{msg.text}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default page
"use client"

import { useParams } from "next/navigation"

export default function UserProfile() {
  const { username } = useParams()

  const user = {
    username,
    name: "Ansh Tyagi",
    email: "ansh@example.com",
    joined: "October 2025",
    bio: "Full Stack Developer | Learning, Building, and Breaking things 🚀",
    avatar: "https://i.pravatar.cc/150?u=ansh",
  }

  const messages = [
    { id: 1, from: "John", text: "Hey Ansh! How’s your project going?" },
    { id: 2, from: "Sarah", text: "Can you review my PR later?" },
    { id: 3, from: "Alex", text: "Don’t forget our call tomorrow!" },
  ]

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center space-x-4 p-4 border rounded-xl shadow-sm">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-400 mt-1">Joined: {user.joined}</p>
        </div>
      </div>

      <div className="border rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Details</h3>
        <p>{user.bio}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
          Edit Profile
        </button>
      </div>

      <div className="border rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold mb-3">Messages</h3>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="p-3 mb-2 rounded-lg bg-gray-50 border last:mb-0"
          >
            <p className="font-medium">{msg.from}</p>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
