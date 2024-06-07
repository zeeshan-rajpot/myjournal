import { React, useState } from "react";

function EmotionCard({ img, title }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className="relative border rounded-3xl p-6 bg-white shadow-sm text-center w-48 h-56 m-auto">
      <img
        src={img}
        alt="emojis "
        className="m-auto w-32 h-28 object-contain "
      />
      <hr className="my-2" />
      <h2 className="mt-2 text-lg font-normal">{title}</h2>
      <button
        className="absolute top-2 right-1 text-gray-900 text-lg font-medium hover:text-gray-600"
        onClick={toggleDropdown}
      >
        <img src="dots.svg" alt="dotsIcon" />
      </button>
      {dropdownVisible && (
        <div className="absolute top-6 -right-24 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <div className="py-1">
            <button className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200">
              Edit
            </button>
            <hr />
            <button className="block w-full  px-4 py-2 text-left text-gray-800 hover:bg-gray-200">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmotionCard;
