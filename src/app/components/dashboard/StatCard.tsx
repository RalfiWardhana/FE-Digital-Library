import React from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: string;
  color: string;
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className={`rounded-full p-3 ${color} text-white mr-4`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;