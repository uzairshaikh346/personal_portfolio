"use client"; // Mark this component as a client component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Nav() {
  const pathname = usePathname(); // Get the current path

  return (
    <>
      <header className="flex justify-between items-center p-5 h-14 bg-blue-200 shadow-md">
        <h1 className="font-bold text-sm md:text-lg mr-2 md:mr-0">Muhammad Uzair</h1>

        {/* Mobile Menu
        <div className="md:hidden">
          <button className="p-2 text-blue-700 border border-blue-700 rounded">Menu</button>
        </div> */}

        {/* Desktop Menu */}
        <nav className="text-xs md:flex space-x-3 md:space-x-6 md:text-lg items-center">
          <Link
            href="/"
            className={`${
              pathname === '/' ? 'border-b-2 border-blue-700' : ''
            } hover:border-b-2 border-blue-700 pb-1 transition duration-200`}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className={`${
              pathname === '/portfolio' ? 'border-b-2 border-blue-700' : ''
            } hover:border-b-2 border-blue-700 pb-1 transition duration-200`}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === '/contact' ? 'border-b-2 border-blue-700' : ''
            } hover:border-b-2 border-blue-700 pb-1 transition duration-200`}
          >
            Contact
          </Link>
          
        </nav>
      </header>
    </>
  );
}

export default Nav;
