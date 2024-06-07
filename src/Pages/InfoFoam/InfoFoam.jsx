import { React, useState } from "react";
import Header from "./Header";
import Sidebar from "../../Compunents/SideBar";
import Breadcrumb from "../../Compunents/Breadcrumb";
import TabContent from "./TabContent";

const InfoFoam = () => {
  const [activeTab, setActiveTab] = useState("first");
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10 ">
        <div className="col-span-2 lg:col-span-2  ">
          <Sidebar actTab="DashBoard" />
        </div>
        <div className="min-h-screen col-span-8 lg:col-span-8 bg-theme  p-8 ">
          <Breadcrumb name="Info Foam" />
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className=" bg-white p-4 rounded-3xl">
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoFoam;
