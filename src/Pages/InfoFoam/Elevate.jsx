import React, { useState, useEffect } from "react";
import ElevateCard from "../../Compunents/ElevateCard";
import ModalComponent from "../../Compunents/ModalComponent";
import ElevateModal from "../../Compunents/ElevateModal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { infoApi } from "../../api";

const Elevate = () => {
  const [elvateData, setElvateData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const getElevates = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await infoApi.getElevates();
      setElvateData(response.data);
      console.log("Elevates data:", response.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getElevates();
  }, []);

  return (
    <>
      <div className="my-2">
        <div className="flex justify-between border-b border-[#181919] w-[95%] m-auto">
          <div className="flex flex-col sm:flex-row space-x-2 items-center">
            <h1 className="text-xl font-bold">Choose area you’d like to elevate</h1>
            <button className="flex text-blue-500">
              <img src="mynaui_edit-one.svg" alt="edit" />
              <span>Edit</span>
            </button>
          </div>
          <div>
            <button className="p-4 text-center" onClick={openModal}>
              + Add More
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>
              <Skeleton height={200} />
            </div>
          ))
        ) : (
          elvateData.map((data, index) => (
            <ElevateCard key={index} title={data.title} />
          ))
        )}
      </div>
      {isOpen && (
        <ElevateModal handleclick={openModal} handleClose={closeModal} />
      )}
    </>
  );
};

export default Elevate;
