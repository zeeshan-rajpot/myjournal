
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ActiveUsersChart = () => {
  const data = {
    labels: ['2 May', '3 May', '4 May', '5 May', '6 May', '7 May', '8 May'],
    datasets: [
      {
        label: 'Active Users',
        data: [20, 30, 25, 40, 35, 50, 45],
        fill: true,
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        borderColor: 'rgba(255, 205, 86, 1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 60,
      },
    },
  };

  return (
    <div className="w-full max-w-xl 2xl:max-w-3xl p-6 bg-white shadow-md rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">Active Users</h2>
        <select className="border rounded-full px-3 py-1">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ActiveUsersChart;
