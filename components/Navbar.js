"use client"
import React from 'react';
import Link from 'next/link';
import "./Navbar.css";
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();
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
                    <li><a href="/">Home</a ></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link className={session ? "block" : "hidden"} href="/dashboard">Dashboard</Link></li>
                    <button><Link className={session ? "hidden" : "block"} href="/login">Login</Link></button>
                    <button className={session ? "block signOut-btn" : "hidden"} onClick={() => signOut()} >Signout</button>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar