import React from 'react';
import Link from "next/link";
const Navbar = () => {
    return (
        <div className="topnav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/messages/sup">Sup</Link>
        </div>
    );
};

export default Navbar;