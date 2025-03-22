"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { DashboardStats } from '../../types';

interface MonthlyLendingTrendsChartProps {
  data: DashboardStats['lendingTrends'];
}

const MonthlyLendingTrendsChart = ({ data }: MonthlyLendingTrendsChartProps) => {
  const chartData = {
    labels: data.map(trend => trend.month),
    datasets: [
      {
        label: 'Books Borrowed',
        data: data.map(trend => trend.count),
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        tension: 0.1,
        fill: true,
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
        text: 'Monthly Lending Trends',
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
          text: 'Number of Books Borrowed',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MonthlyLendingTrendsChart;