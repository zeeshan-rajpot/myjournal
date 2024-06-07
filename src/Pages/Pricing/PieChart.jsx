import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const PieChart = () => {
  const data = {
    labels: ["1 Year", "1 Month", "7 Days"],
    datasets: [
      {
        data: [35, 35, 30],
        backgroundColor: ["#D9A74A", "#D9C84A", "#D9E24A"],
        hoverBackgroundColor: ["#C6923E", "#C6B23E", "#C6CE3E"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-3xl w-full max-w-lg mx-auto">
      <h2 className="text-black text-lg font-bold mb-2">Plan distribution</h2>
      <div className="relative">
        <Pie data={data} options={options} />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white font-bold">
            {data.datasets[0].data.map((value, index) => (
              <div
                key={index}
                style={{ marginTop: `${index === 0 ? 0 : "1rem"}` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-4">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-4 h-4 rounded-full`}
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            ></div>
            <span className="ml-2 text-black text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
