import React from "react";
import { Doughnut } from "react-chartjs-2";

const UserStats = () => {
  const data = [
    { label: "Total Users", value: 4796, percentage: 75, color: "#FFCC00" },
    { label: "Free Users", value: 2620, percentage: 63, color: "#FFD700" },
    { label: "Premium Users", value: 1630, percentage: 86, color: "#8B4513" },
  ];

  const chartOptions = {
    cutout: "70%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
      beforeDraw: (chart) => {
        const { width, height, ctx } = chart;
        ctx.restore();
        const fontSize = (height / 100).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = "middle";
        const text = `${chart.config.data.datasets[0].data[0]}%`;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  };

  const chartData = (percentage, color) => ({
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  });

  return (
    <div className="bg-white p-6 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="text-center">
            <div className="text-xl font-semibold">{item.value}</div>
            <div className="text-gray-500">{item.label}</div>
          </div>
          <div className="w-24 h-24 mb-2 ">
            <Doughnut
              data={chartData(item.percentage, item.color)}
              options={chartOptions}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
