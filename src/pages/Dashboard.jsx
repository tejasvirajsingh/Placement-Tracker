import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import ProgressCard from "../components/ProgressCard";

function Dashboard() {
  return (
    <MainLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Welcome Back, Tejasvi 👋</h1>

        <p className="text-gray-400 mt-2">
          Stay consistent today. Every solved problem brings you closer to your
          dream placement.
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <Card
          title="Placement Readiness"
          value="72%"
        />

        <Card
          title="Current Streak"
          value="12 Days"
        />

        <Card
          title="Vocabulary"
          value="250"
        />

        <Card
          title="LeetCode"
          value="67"
        />

      </div>

      {/* Progress Section */}
      <h2 className="text-2xl font-bold mt-10 mb-5">
        📈 Progress
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <ProgressCard
          title="DSA Progress"
          completed={6}
          total={16}
        />

        <ProgressCard
          title="Aptitude Progress"
          completed={3}
          total={18}
        />

        <ProgressCard
          title="Vocabulary Progress"
          completed={250}
          total={1000}
        />

      </div>

      {/* Quote + Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

        {/* Today's Goal */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-lg">

          <h2 className="text-2xl font-bold mb-5">
            🎯 Today's Goal
          </h2>

          <div className="space-y-3">

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Solve 2 LeetCode Problems
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Learn 20 English Words
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Practice Aptitude
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Revise Yesterday's Topics
            </label>

          </div>

        </div>

        {/* Quote */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-lg">

          <h2 className="text-2xl font-bold mb-5">
            🚀 Quote of the Day
          </h2>

          <p className="text-gray-400 leading-8">

            "Discipline is choosing between what you want now and what you want
            most."

          </p>

        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-slate-800 rounded-xl p-6 shadow-lg mt-10">

        <h2 className="text-2xl font-bold mb-6">
          📝 Recent Activity
        </h2>

        <ul className="space-y-4 text-gray-300">

          <li>✅ Completed Arrays</li>

          <li>✅ Solved LeetCode 125</li>

          <li>📖 Learned 20 New Words</li>

          <li>🧠 Practiced Aptitude</li>

        </ul>

      </div>

    </MainLayout>
  );
}

export default Dashboard;