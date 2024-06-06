import EmotionCard from "../../Compunents/EmotionCard";

const emotions = [
  { img: "/angry.png", title: "Angry" },
  { img: "/sad.png", title: "Sad" },
  { img: "/wonderful.png", title: "Wonderful" },
  { img: "/enjoyable.png", title: "Enjoyable" },
  { img: "/busy.png", title: "Busy" },
  { img: "/lazy.png", title: "Lazy" },
];

function SecondScreen() {
  return (
    <>
      <div className="my-2">
        <div className="flex justify-between border-b border-[#181919] w-[95%] m-auto">
          <div className="flex flex-col sm:flex-row space-x-2 items-center ">
            <h1 className="text-xl font-bold ">
              What made your evening somewhat is bad?
            </h1>
            <button className="flex text-blue-500  ">
              <img src="mynaui_edit-one.svg" alt="edit" />
              <span>Edit</span>
            </button>
          </div>
          <div>
            <button className="p-4 text-center ">+ Add More</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {emotions.map((emotion, index) => (
          <EmotionCard
            key={index}
            emoji={emotion.emoji}
            title={emotion.title}
          />
        ))}
      </div>
    </>
  );
}

export default SecondScreen;
