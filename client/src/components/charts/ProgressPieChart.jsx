import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ProgressPieChart({
  dsaPercentage,
  aptitudePercentage,
  wordsPercentage,
}) {
  const data = [
    {
      name: "DSA",
      value: dsaPercentage,
    },
    {
      name: "Aptitude",
      value: aptitudePercentage,
    },
    {
      name: "Words",
      value: wordsPercentage,
    },
  ];

  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg h-[420px]">
      <h2 className="text-2xl font-bold mb-5">
        📊 Overall Progress
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressPieChart;