import React, { useState, useEffect } from "react";
import EmotionCard from "../../Compunents/EmotionCard";
import ModalComponent from "../../Compunents/ModalComponent";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { infoApi } from "../../api";

const Motivation = () => {
  const [motivationData, setMotivationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const getMotivation = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await infoApi.getMotivation();
      setMotivationData(response.data);
      console.log("Motivation data:", response.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMotivation();
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="my-2">
        <div className="flex justify-between border-b border-[#181919] w-[95%] m-auto">
          <div className="flex flex-col sm:flex-row space-x-2 items-center ">
            <h1 className="text-xl font-bold">
              When do you like to find most motivation?
            </h1>
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
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div key={index}>
                <Skeleton height={200} />
                <Skeleton count={1} />
              </div>
            ))
          : motivationData.map((data, index) => (
              <EmotionCard key={index} img={data.path} title={data.title} />
            ))}
      </div>
      {isOpen && (
        <ModalComponent handleclick={openModal} handleClose={closeModal} />
      )}
    </>
  );
};

export default Motivation;
