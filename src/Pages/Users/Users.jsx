import { React, useState } from "react";
import Sidebar from "../../Compunents/SideBar";
import Breadcrumb from "../../Compunents/Breadcrumb";

const Users = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? -1 : index);
  };

  const data = [
    {
      name: "Zeeshan Rana",
      email: "Itsmohsinar@gmail.com",
      plan: "Free",
    },
    {
      name: "Zeeshan ",
      email: "Itsmohsinar@gmail.com",
      plan: "Free",
    },
    {
      name: "Zeeshan Rana",
      email: "Itsmohsinar@gmail.com",
      plan: "Free",
    },
    {
      name: "Zeeshan ",
      email: "Itsmohsinar@gmail.com",
      plan: "1 month",
    },
    {
      name: "Zeeshan Rana",
      email: "Itsmohsinar@gmail.com",
      plan: "Free",
    },
    {
      name: "Zeeshan ",
      email: "Itsmohsinar@gmail.com",
      plan: "1 month",
    },
    {
      name: "Zeeshan Rana",
      email: "Itsmohsinar@gmail.com",
      plan: "3 month",
    },
    {
      name: "Zeeshan ",
      email: "Itsmohsinar@gmail.com",
      plan: "1 month",
    },

    // Add more data objects as needed
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 ">
      <div className="col-span-2 lg:col-span-2  ">
        <Sidebar actTab="DashBoard" />
      </div>
      <div className="col-span-8 lg:col-span-8 bg-theme p-8 xl:h-screen">
        <Breadcrumb name="users" />
        <section className=" p-3 sm:p-5">
          <div className="mx-auto max-w-screen-xl">
            <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-[#2A3037]">
                  <thead className="text-xs text-white bg-[#272828] UpperCae">
                    <tr>
                      <th scope="col" className="px-4 py-3 flex items-center">
                        User ID
                        <span>
                          <img src="fa-solid_sort-up.svg" alt="sort_icon" />
                        </span>
                      </th>
                      <th scope="col" className="px-4 py-3 ">
                        Name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Plan
                      </th>
                      <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr
                        key={index}
                        className={` ${index % 2 === 1 ? "bg-[#FCFCFC]" : ""} `}
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {index + 1}
                        </th>
                        <td className="px-4 py-3">{item.name}</td>
                        <td className="px-4 py-3">{item.email}</td>
                        <td className="px-4 py-3">{item.plan}</td>
                        <td className="px-4 py-3 flex items-center justify-end">
                          <button
                            className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none"
                            type="button"
                            onClick={() => toggleDropdown(index)}
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                          {index === openDropdownIndex && (
                            <div className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
                              <ul className="py-1 text-sm text-gray-700 ">
                                <li>
                                  <a
                                    className="block py-2 px-4 hover:bg-gray-100"
                                    onClick={() => toggleDropdown(-1)} // Close dropdown on delete click
                                  >
                                    Delete
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block py-2 px-4 hover:bg-gray-100"
                                    onClick={() => toggleDropdown(-1)} // Close dropdown on block click
                                  >
                                    Block
                                  </a>
                                </li>
                              </ul>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 ">
                Showing
                <span className="font-semibold text-gray-900 ">1-10</span>
                of
                <span className="font-semibold text-gray-900 ">1000</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Users;
