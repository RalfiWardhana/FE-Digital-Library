import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      <main className="pt-16 pl-64">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default Layout;