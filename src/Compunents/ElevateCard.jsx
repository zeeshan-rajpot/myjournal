import React from "react";

const ElevateCard = ({ title }) => {
  return (
    <div className="flex justify-between border border-[#FEF2CA] rounded-full py-2 pr-4 bg-white  ">
      <h2 className="text-lg font-normal m-auto">{title}</h2>
      <button>
        <img src="dots.svg" alt="dotsIcon" />
      </button>
    </div>
  );
};

export default ElevateCard;
