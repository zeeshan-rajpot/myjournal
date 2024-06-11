import React from "react";
import Sidebar from "../../Compunents/SideBar";
import Breadcrumb from "../../Compunents/Breadcrumb";
import ActiveUsersChart from "./ActiveUsersChart";
import CurrentStreaks from "./CurrentStreaks";
import PaymentTransaction from "./PaymentTransaction";
import UserStats from "./UserStats";

const DashBoard = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10 ">
        <div className="col-span-2 ">
          <Sidebar actTab="DashBoard" />
        </div>
        <div className="col-span-8  bg-theme  p-8 ">
          <Breadcrumb name="Hello, Jhone Simth👋" />
          <UserStats />
          <div className="flex flex-col sm:flex-row my-5 md:space-x-5 space-y-4 sm:space-y-0">
            <ActiveUsersChart />
            <CurrentStreaks/>
          </div>
            <PaymentTransaction/>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
