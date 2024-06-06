import React from "react";

const CurrentStreaks = () => {
  const streaks = [
    { name: "William Sons", days: 30 },
    { name: "Oliver Charlotte", days: 15 },
    { name: "James Mohn", days: 24 },
    { name: "Scarlett Neutral", days: 14 },
    { name: "Scarlett Neutral", days: 14 },
    { name: "Scarlett Neutral", days: 14 },
  ];

  return (
    <div className="w-full max-w-md 2xl:max-w-lg p-6 bg-white shadow-md rounded-3xl">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Current Streaks</h2>
      <ul>
        {streaks.map((streak, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span className="text-gray-700">{streak.name}</span>
            <span className="text-yellow-500">{streak.days} days</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentStreaks;
