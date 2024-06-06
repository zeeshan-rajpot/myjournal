import React from "react";

// Breadcrumb component
const Breadcrumb = ({ name }) => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="flex items-center font-bold text-xl sm:text-3xl mr-4">
        {name}
      </div>
      <div className="flex items-center space-x-3">
        <img
          src="/Ellipse 1.png"
          alt="user_icon"
          className="rounded-full w-10 h-10"
        />
        <span className="text-md font-bold">Jhone Simth</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
