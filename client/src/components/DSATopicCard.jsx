function DSATopicCard({ topic, checked, onChange }) {
  return (
    <div className="flex items-center justify-between bg-slate-800 p-4 rounded-xl hover:bg-slate-700 transition">

      <h2 className="text-lg">
        {topic}
      </h2>

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5"
      />

    </div>
  );
}

export default DSATopicCard;