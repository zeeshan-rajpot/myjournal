import React from "react";

function EmotionCard({ img, title }) {
  return (
    <div className="relative border rounded-3xl p-6 bg-white shadow-sm text-center w-48 h-48 m-auto">
      <img src={img} alt="emojis " className="m-auto w-32 h-28 object-contain " />
      <hr className="my-2"/>
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <button className="absolute top-1 right-4 text-gray-400 hover:text-gray-600">
        ⋮
      </button>
    </div>
  );
}

export default EmotionCard;
