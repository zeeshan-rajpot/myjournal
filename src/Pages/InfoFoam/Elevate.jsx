import { React, useState } from "react";
import ElevateCard from "../../Compunents/ElevateCard";
import ModalComponent from "../../Compunents/ModalComponent";
import ElevateModal from "../../Compunents/ElevateModal";

const Elevate = () => {
  const emotions = [
    { title: "Motivation" },
    { title: "Leadership" },
    { title: "Management" },
    { title: "Time-management" },
    { title: "Parenting" },
    { title: "Emotions" },
    { title: "Nutritions" },
    { title: "Habits" },
    { title: "Self-confident" },
    { title: "Mindfulness" },
    { title: "Conflict-resolution" },
    { title: "Leadership skills" },
    { title: "Self-awareness" },
    { title: "Resilience" },
    { title: "Mindset" },
    { title: "Self-care" },
    { title: "Communication" },
    { title: "Exercise" },
    { title: "Empathy" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <div className="my-2">
        <div className="flex justify-between border-b border-[#181919] w-[95%] m-auto">
          <div className="flex flex-col sm:flex-row space-x-2 items-center ">
            <h1 className="text-xl font-bold ">
              Choose area you’d like to elevate
            </h1>
            <button className="flex text-blue-500  ">
              <img src="mynaui_edit-one.svg" alt="edit" />
              <span>Edit</span>
            </button>
          </div>
          <div>
            <button className="p-4 text-center " onClick={openModal}>
              + Add More
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mt-8">
        {emotions.map((emotion, index) => (
          <ElevateCard key={index} title={emotion.title} />
        ))}
      </div>
      {isOpen && (
        <ElevateModal handleclick={openModal} handleClose={closeModal} />
      )}
    </>
  );
};

export default Elevate;
