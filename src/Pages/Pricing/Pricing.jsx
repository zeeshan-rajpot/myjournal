import React from "react";
import Sidebar from "../../Compunents/SideBar";
import Breadcrumb from "../../Compunents/Breadcrumb";
import PieChart from "./PieChart";
import RevenueCard from "./RevenueCard";
import PlanCard from "./PlanCard";
import PaymentTransaction from "../Dashboard/PaymentTransaction";

const Pricing = () => {
  const RevenueData = [
    {
      img: "/pricePouch.svg",
      title: "Total Revenue",
      amount: "$1.690M",
    },
    {
      img: "/bx_dollar.svg",
      title: "Monthly Revenue",
      amount: "$43,000",
    },
    {
      img: "/bx_dollar.svg",
      title: "Yearly Revenue",
      amount: "$98,430",
    },
  ];

  const planData = [
    {
      number: "1",
      duration: "Year",
      price: "CHF 99.00",
    },
    {
      number: "1",
      duration: "Month",
      price: "CHF 12.00",
    },
    {
      number: "7",
      duration: "Days",
      price: "CHF 3.00",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10 ">
        <div className="col-span-2 lg:col-span-2  ">
          <Sidebar actTab="DashBoard" />
        </div>
        <div className="col-span-8 lg:col-span-8 bg-theme  p-8 ">
          <Breadcrumb name="Payment & Plans" />
          <div className="flex flex-col sm:flex-row space-x-5">
            <div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0  space-x-0 sm:space-x-4">
                {RevenueData.map((data, index) => (
                  <RevenueCard
                    key={index}
                    img={data.img}
                    title={data.title}
                    amount={data.amount}
                  />
                ))}
              </div>
              <div className="bg-white p-5 border rounded-3xl my-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold my-3">
                    Plan List
                  </h2>
                  <button className="flex text-blue-500  ">
                    <img src="mynaui_edit-one.svg" alt="edit" />
                    <span>Edit</span>
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center sm:flex-row space-y-2 sm:space-y-0  space-x-0 sm:space-x-4 ">
                  {planData.map((data, index) => (
                    <PlanCard
                      key={index}
                      number={data.number}
                      duration={data.duration}
                      price={data.price}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="my-2 ">
              <PieChart />
            </div>
          </div>
          <PaymentTransaction />
        </div>
      </div>
    </>
  );
};

export default Pricing;
