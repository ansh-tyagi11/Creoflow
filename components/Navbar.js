"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import "./Navbar.css";
import { useSession, signOut } from 'next-auth/react';
import { getUser } from '@/actions/useractions';

const Navbar = () => {
    const { data: session } = useSession();
    const [yourPage, setYourPage] = useState({})

    useEffect(() => {
        if (session?.user?.email) {
            loadUserPage();
        }
    }, [session])

    const loadUserPage = async () => {
        const userData = await getUser(session.user.email);
        setYourPage(userData);
    };

    return (
        <div className='body h-[16vh] px-4'>
            <nav className='flex items-center justify-between w-full'>
                <div>Logo</div>

                <input
                    type="search"
                    placeholder='Search your creator'
                    className="mx-4"
                />

                <ul className='flex items-center justify-between w-56'>
                    <li><a href="/">Home</a></li>
                    <li><Link href="/about">About</Link></li>
                    <div className={session ? "relative inline-block group" : "hidden "}>
                        <button className="flex items-center px-4 py-2 text-white rounded ">
                            {session ? `${session.user.email}` : "User"}
                            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                        </button>

                        <div className="w-full absolute hidden group-hover:block bg-white/15 text-centre w-ful p-2.5">
                            <a href="/dashboard" className="block pl-4 py-2">Dashboard</a>
                            <a href={`/${yourPage.username}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Your Page</a >
                            <button className="signOut-btn " onClick={() => signOut()} >Signout</button>
                        </div>
                    </div>
                    <button><Link className={session ? "hidden" : "block"} href="/login">Login</Link></button>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar