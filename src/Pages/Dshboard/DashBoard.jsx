import React from 'react';
import Sidebar from '../../Compunents/SideBar';

const DashBoard = () => {
  return (
    <>
      



      <div className="grid grid-cols-1 lg:grid-cols-10 ">
      <div className="col-span-2 lg:col-span-2  ">
        <Sidebar actTab="DashBoard" />
      </div>
      <div className="col-span-8 lg:col-span-8 bg-[#F2FAFF] h-screen">
       
      </div>
    </div>




    </>
  );
}

export default DashBoard;
