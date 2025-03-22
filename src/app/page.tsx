"use client";
import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import StatCard from './components/dashboard/StatCard';
import { dummyDashboardStats } from './lib/dummyData';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const stats = dummyDashboardStats;

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Most Borrowed Books',
      },
    },
  };

  const barChartData = {
    labels: stats.mostBorrowedBooks.map(book => book.title),
    datasets: [
      {
        label: 'Borrow Count',
        data: stats.mostBorrowedBooks.map(book => book.count),
        backgroundColor: 'rgba(99, 102, 241, 0.6)',
      },
    ],
  };

  const pieChartData = {
    labels: stats.categoryDistribution.map(cat => cat.category),
    datasets: [
      {
        data: stats.categoryDistribution.map(cat => cat.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Lending Trends',
      },
    },
  };

  const lineChartData = {
    labels: stats.lendingTrends.map(trend => trend.month),
    datasets: [
      {
        label: 'Books Borrowed',
        data: stats.lendingTrends.map(trend => trend.count),
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        tension: 0.1,
      },
    ],
  };

  // Memastikan kode ini berjalan di browser, bukan di server
  useEffect(() => {
    // Kode untuk event handling atau lainnya (jika diperlukan)
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Books"
          value={stats.totalBooks}
          icon="book"
          color="bg-blue-500"
        />
        <StatCard
          title="Currently Borrowed"
          value={stats.totalBorrowed}
          icon="swap_horiz"
          color="bg-green-500"
        />
        <StatCard
          title="Overdue Books"
          value={stats.totalOverdue}
          icon="warning"
          color="bg-red-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Bar options={barChartOptions} data={barChartData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Pie data={pieChartData} />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <Line options={lineChartOptions} data={lineChartData} />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Recent Lending Activities</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borrower</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">The Hobbit</td>
                <td className="px-6 py-4 whitespace-nowrap">Emma Johnson</td>
                <td className="px-6 py-4 whitespace-nowrap">20 Feb 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Borrowed
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Introduction to Algorithms</td>
                <td className="px-6 py-4 whitespace-nowrap">Michael Lee</td>
                <td className="px-6 py-4 whitespace-nowrap">10 Jan 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Overdue
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">To Kill a Mockingbird</td>
                <td className="px-6 py-4 whitespace-nowrap">John Smith</td>
                <td className="px-6 py-4 whitespace-nowrap">1 Mar 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Returned
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}