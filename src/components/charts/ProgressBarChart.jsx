import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ProgressBarChart({
  dsaCompleted,
  dsaTotal,
  aptitudeCompleted,
  aptitudeTotal,
  wordsLearned,
}) {
  const data = [
    {
      name: "DSA",
      Completed: dsaCompleted,
      Remaining: dsaTotal - dsaCompleted,
    },
    {
      name: "Aptitude",
      Completed: aptitudeCompleted,
      Remaining: aptitudeTotal - aptitudeCompleted,
    },
    {
      name: "Words",
      Completed: wordsLearned,
      Remaining: Math.max(1000 - wordsLearned, 0),
    },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg h-[420px]">
      <h2 className="text-2xl font-bold mb-5">
        📈 Progress Comparison
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="Completed"
            fill="#10B981"
          />

          <Bar
            dataKey="Remaining"
            fill="#334155"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressBarChart;