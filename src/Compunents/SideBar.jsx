// File: Sidebar.jsx

import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import "./sidebar.css";

const Sidebar = (props) => {
  const [activeTab, setActiveTab] = useState(props.actTab);
  const [isOpen, setIsOpen] = useState(false);
  const [isbtnOpen, setIsbtnOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropDown = () => {
    setIsbtnOpen(!isbtnOpen);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex lg:hidden">
          <img
            src="/Logo.png"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 w-[94px] "
          />
          <img
            alt=""
            className="inline-flex items-center p-2 mt-2  w-[74px] "
          />
        </div>
        <button
          onClick={toggleSidebar}
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mr-3"
        >
          <span className="sr-only">
            {isOpen ? "Close sidebar" : "Open sidebar"}
          </span>

          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>

      <aside
        id="default-sidebar"
        className={clsx(
          "fixed top-0 left-0 z-40 w-[17rem] 2xl:w-80 h-screen transition-transform",
          {
            "translate-x-0": isOpen,
            "-translate-x-full lg:translate-x-0": !isOpen,
          },
          "bg-[#181919]"
        )}
        aria-label="Sidebar"
      >
        <div className="h-screen md:h-[98vh] px-3 py-4 overflow-y-auto md:m-3 md:rounded-3xl ">
          <div className="flex justify-center items-center mb-4">
            <img
              src="/Logo.png"
              alt="loginIcon_logo"
              className="w-32 md:w-40"
            />
          </div>
          <ul className="space-y-3 font-medium flex flex-col w-[90%] m-auto mt-24">
            <li>
              <NavLink
                to="/DashBoard"
                className={({ isActive }) =>
                  clsx(
                    "flex items-center py-1 rounded-2xl text-gray-400 hover:text-white hover:bg-gray-700",
                    {
                      "text-white bg-[#181919]": isActive,
                    }
                  )
                }
              >
                <img
                  src="Frame 68026.svg"
                  alt="dashboard_icon"
                  className="w-8 ms-4"
                />
                <span className="ms-3 text-xl lg:text-xl font-normal">
                  DashBoard
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  clsx(
                    "flex items-center py-1 rounded-2xl text-gray-400 hover:text-white hover:bg-gray-700",
                    {
                      "text-white bg-gray-800": isActive,
                    }
                  )
                }
              >
                <img
                  src="solar_user-broken.svg"
                  alt="user_icon"
                  className="w-8 ms-4"
                />
                <span className="ms-3 text-xl lg:text-xl font-normal">
                  Users
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/checkin"
                className={({ isActive }) =>
                  clsx(
                    "flex items-center py-1 rounded-2xl text-gray-400 hover:text-white hover:bg-gray-700",
                    {
                      "text-white bg-gray-800": isActive,
                    }
                  )
                }
              >
                <img
                  src="Frame 68027.svg"
                  alt="checkin_icon"
                  className="w-8 ms-4"
                />
                <span className="ms-3 text-xl lg:text-xl font-normal">
                  Check-In
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/infoFoam"
                className={({ isActive }) =>
                  clsx(
                    "flex items-center py-1 rounded-2xl text-gray-400 hover:text-white hover:bg-gray-700",
                    {
                      "text-white bg-gray-800": isActive,
                    }
                  )
                }
              >
                <img src="infoIcon.svg" alt="info_icon" className="w-8 ms-4" />
                <span className="ms-3 text-xl lg:text-xl font-normal">
                  Info Foam
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  clsx(
                    "flex items-center py-1 rounded-2xl text-gray-400 hover:text-white hover:bg-gray-700",
                    {
                      "text-white bg-gray-800": isActive,
                    }
                  )
                }
              >
                <img
                  src="grommet-icons_money.svg"
                  alt="money_icon"
                  className="w-8 ms-4"
                />
                <span className="ms-3 text-xl lg:text-xl font-normal">
                  Pricing
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  clsx(
                    "flex items-center py-1 rounded-2xl text-gray-400 hover:text-white hover:bg-gray-700",
                    {
                      "text-white bg-gray-800": isActive,
                    }
                  )
                }
              >
                <img
                  src="logout.svg"
                  alt="logout_icon"
                  className="w-8 ms-4"
                />
                <span className="ms-3 text-xl lg:text-xl font-normal">
                  Logout
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
