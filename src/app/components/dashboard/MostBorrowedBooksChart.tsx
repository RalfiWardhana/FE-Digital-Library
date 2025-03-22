"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { DashboardStats } from '../../types';

interface MostBorrowedBooksChartProps {
  data: DashboardStats['mostBorrowedBooks'];
}

const MostBorrowedBooksChart = ({ data }: MostBorrowedBooksChartProps) => {
  const chartData = {
    labels: data.map(book => book.title),
    datasets: [
      {
        label: 'Times Borrowed',
        data: data.map(book => book.count),
        backgroundColor: 'rgba(99, 102, 241, 0.6)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Most Borrowed Books',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Times Borrowed',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Book Title',
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default MostBorrowedBooksChart;