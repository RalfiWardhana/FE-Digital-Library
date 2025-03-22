import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
}

const NavItem = ({ href, icon, label, active = false }: NavItemProps) => {
  return (
    <Link 
      href={href}
      className={`flex items-center space-x-3 p-3 rounded-lg ${
        active ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 h-screen shadow-md fixed left-0 top-16 p-4">
      <div className="flex flex-col space-y-1">
        <NavItem href="/dashboard" icon="dashboard" label="Dashboard" active />
        <NavItem href="/books" icon="book" label="Books Management" />
        <NavItem href="/lending" icon="swap_horiz" label="Lending Records" />
        <NavItem href="/users" icon="people" label="Users" />
        <NavItem href="/settings" icon="settings" label="Settings" />
      </div>
    </aside>
  );
};

export default Sidebar;