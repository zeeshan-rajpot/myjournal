import React from "react";
import clsx from "clsx";

function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "first", label: "Goals" },
    { id: "second", label: "Elevate" },
    { id: "third", label: "Motivation" },
  ];

  return (
    <header className="text-center mb-8 mt-2">
      <nav className="flex justify-around text-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx("px-4 py-2", {
              "font-bold border-b-2 border-[#272828]  text-[#272828] text-md sm:text-lg":
                activeTab === tab.id,
              "text-gray-700 text-md sm:text-xl": activeTab !== tab.id,
            })}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
