import EmotionCard from "../../Compunents/EmotionCard";

const emotions = [
  { emoji: "😠", title: "Angry" },
  { emoji: "😢", title: "Sad" },
  { emoji: "😍", title: "Wonderful" },
  { emoji: "😊", title: "Enjoyable" },
  { emoji: "😵", title: "Busy" },
  
];

function ThirdScreen() {
  return (
    <>
      <div className="my-2">
        <div className="flex space-x-2 items-center">
          <h1 className="text-xl font-bold mt-4">How was your day?</h1>
          <button className="text-blue-500 underline">Edit</button>
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
        {/* <button className="border rounded-lg p-4 bg-white shadow-sm text-center flex items-center justify-center">
          + Add More
        </button> */}
      </div>
    </>
  );
}

export default ThirdScreen;
