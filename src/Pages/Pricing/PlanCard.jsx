import React from "react";

const PlanCard = ({ number, duration, price }) => {
  return (
    <div className="border rounded-lg  text-center p-8">
      <h1 className=" text-xl sm:text-4xl font-bold">{number} </h1>
      <h2 className="text-xl font-bold text-[#9A9A9A]">{duration}</h2>
      <p className="text-lg text-[#747474]">{price}</p>
    </div>
  );
};

export default PlanCard;
