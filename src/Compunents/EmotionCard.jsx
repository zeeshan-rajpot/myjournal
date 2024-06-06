function EmotionCard({ emoji, title }) {
  return (
    <div className="relative border rounded-lg p-4 bg-white shadow-sm text-center">
      <div className="text-4xl">{emoji}</div>
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <button className="absolute top-1 right-1 text-gray-400 hover:text-gray-600">
        ⋮
      </button>
    </div>
  );
}

export default EmotionCard;
