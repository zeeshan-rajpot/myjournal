import EmotionCard from "../../Compunents/EmotionCard";

const emotions = [
  { emoji: "😠", title: "Angry" },
  { emoji: "😢", title: "Sad" },
  { emoji: "😍", title: "Wonderful" },
  { emoji: "😊", title: "Enjoyable" },
  { emoji: "😵", title: "Busy" },
  { emoji: "😴", title: "Lazy" },
];

function FirstScreen() {
  return (
    <>
      <div className="my-2">
        <div className="flex ">
          <h1 className="text-xl font-bold mt-4">How was your day?</h1>
          <button className="text-blue-500 underline">Edit</button>
          <div>
          <button className="p-5 bg-white shadow-sm text-center flex items-center justify-center">
          + Add More
        </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

export default FirstScreen;
