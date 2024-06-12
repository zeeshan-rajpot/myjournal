import { React, useState, useEffect } from "react";
import EmotionCard from "../../Compunents/EmotionCard";
import ModalComponent from "../../Compunents/ModalComponent";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { checkInApi } from "../../api";

const emotions = [
  { img: "/Happy.svg", title: "Happy" },
  { img: "/Blessed.svg", title: "Blessed" },
  { img: "/Good.svg", title: "Good" },
  { img: "/Confused.svg", title: "Confused" },
  { img: "/Lucky.svg", title: "Lucky" },
  { img: "/Bored.svg", title: "Bored" },
  { img: "/Awkard.svg", title: "Awkard" },
  { img: "/Good.svg", title: "Good" },
  { img: "/Anxious.svg", title: "Anxious" },
  { img: "/Down.svg", title: "Down" },
  { img: "/Stressed.svg", title: "Stressed" },
];

function ThirdScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [feelingsData, setFeelingsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFeelings = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await checkInApi.getFeelings();
      setFeelingsData(response.data);
      console.log("Moods data:", response.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeelings();
  }, []);
  return (
    <>
      <div className="my-2">
        <div className="flex justify-between border-b border-[#181919] w-[95%] m-auto">
          <div className="flex flex-col sm:flex-row space-x-2 items-center ">
            <h1 className="text-xl font-bold ">How did you feel about this?</h1>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div key={index}>
                <Skeleton height={200} />
                <Skeleton count={1} />
              </div>
            ))
          : feelingsData.map((data, index) => (
              <EmotionCard key={index} img={data.path} title={data.title} />
            ))}
      </div>
      {isOpen && (
        <ModalComponent handleclick={openModal} handleClose={closeModal} />
      )}
    </>
  );
}

export default ThirdScreen;
