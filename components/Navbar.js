import React from 'react';
import Link from 'next/link';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='body h-[16vh]'>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <button><a href="/login">Login</a></button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar