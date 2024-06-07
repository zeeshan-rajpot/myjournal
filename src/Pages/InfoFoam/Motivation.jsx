import { React, useState } from "react";
import EmotionCard from "../../Compunents/EmotionCard";
import ModalComponent from "../../Compunents/ModalComponent";

const Motivation = () => {

  const emotions = [
    { img: "/pana.svg", title: "After monitoring coffee" },
    { img: "/driving.svg", title: "While commuting" },
    { img: "/amico.svg", title: "During my lunch break" },
    { img: "/sleep.svg", title: "Before going to sleep" },
    { img: "/free.svg", title: "Any spare time " },
    { img: "/Asset 114.svg", title: "Self employee" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
       <div className="my-2">
        <div className="flex justify-between border-b border-[#181919] w-[95%] m-auto">
          <div className="flex flex-col sm:flex-row space-x-2 items-center ">
            <h1 className="text-xl font-bold ">When do you like to find most motivation? </h1>
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
          <EmotionCard key={index} img={emotion.img} title={emotion.title} />
        ))}
      </div>
      {isOpen && (
        <ModalComponent handleclick={openModal} handleClose={closeModal} />
      )}
    </>
  )
}

export default Motivation