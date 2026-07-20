function AptitudeCategory({
  title,
  topics,
  aptitude,
  setAptitude,
}) {
  const toggleTopic = (topic) => {
    setAptitude((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {topics.map((topic) => (
          <label
            key={topic}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={aptitude[topic] || false}
              onChange={() => toggleTopic(topic)}
              className="w-5 h-5"
            />

            <span>{topic}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default AptitudeCategory;