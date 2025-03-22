import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Library Dashboard
        </Link>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span>Admin</span>
            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
              A
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;