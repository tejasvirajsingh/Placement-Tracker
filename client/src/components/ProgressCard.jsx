function ProgressCard({ title, completed, total }) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="bg-slate-800 rounded-xl p-5 shadow-lg">
      <div className="flex justify-between mb-3">
        <h2 className="font-semibold">{title}</h2>
        <span>{percentage}%</span>
      </div>

      <div className="w-full h-3 bg-slate-700 rounded-full">
        <div
          className="bg-indigo-500 h-3 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="mt-3 text-gray-400">
        {completed} / {total} Completed
      </p>
    </div>
  );
}

export default ProgressCard;