import React from "react";

const RevenueCard = ({ img, title, amount }) => {
  return (
    <div className="bg-white border rounded-3xl p-6  flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-x-6">
      <div className="bg-black p-2 rounded-full">
        <img src={img} alt="Revenue Icon" className="w-8 h-8" />
      </div>
      <div className="flex flex-col ">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-xl font-medium text-center sm:text-left">{amount}</p>
      </div>
    </div>
  );
};

export default RevenueCard;
