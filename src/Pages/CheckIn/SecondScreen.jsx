import { React, useState } from "react";
import EmotionCard from "../../Compunents/EmotionCard";
import ModalComponent from "../../Compunents/ModalComponent";

const emotions = [
  { img: "/Family.svg", title: "Family" },
  { img: "/Friends.svg", title: "Friends" },
  { img: "/School.svg", title: "School" },
  { img: "/Relationship.svg", title: "Relationship" },
  { img: "/Travelling.svg", title: "Travelling" },
  { img: "/Food.svg", title: "Food" },
  { img: "/Exercise.svg", title: "Exercise" },
  { img: "/Health.svg", title: "Health" },
  { img: "/Hobbies.svg", title: "Hobbies" },
  { img: "/Gaming.svg", title: "Gaming" },
];

function SecondScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="my-2">
        <div className="flex justify-between border-b border-[#181919] w-[95%] m-auto">
          <div className="flex flex-col sm:flex-row space-x-2 items-center ">
            <h1 className="text-xl font-bold ">How was your day?</h1>
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
  );
}

export default SecondScreen;
