"use client";
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { DashboardStats } from '../../types';

interface BooksByCategoryChartProps {
  data: DashboardStats['categoryDistribution'];
}

const BooksByCategoryChart = ({ data }: BooksByCategoryChartProps) => {
  const chartData = {
    labels: data.map(cat => cat.category),
    datasets: [
      {
        data: data.map(cat => cat.count),
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Books by Category',
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full">
      <Pie data={chartData} options={options} />
    </div>
  );
};