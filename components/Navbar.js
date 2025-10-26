import React from 'react';
import Link from 'next/link';
import "./Navbar.css";

const Navbar = () => {
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
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <button><Link href="/login">Login</Link></button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar