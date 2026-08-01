import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import ProgressCard from "../components/ProgressCard";
import { useApp } from "../context/AppContext";
import dsaTopics from "../data/dsaTopics";
import aptitudeTopics from "../data/aptitudeTopics";

function Dashboard() {
  const {
    dsaCompleted,
    dsaPercentage,

    words,

    aptitudeCompleted,
    aptitudePercentage,
  } = useApp();

  // Total Aptitude Topics
  const totalAptitudeTopics =
    aptitudeTopics.quantitative.length +
    aptitudeTopics.reasoning.length +
    aptitudeTopics.verbal.length;

  // Placement Readiness Formula
  const readiness = Math.round(
    dsaPercentage * 0.4 +
      aptitudePercentage * 0.4 +
      Math.min(words.length, 100) * 0.2
  );

  return (
    <MainLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome Back, Tejasvi 👋
        </h1>

        <p className="text-gray-400 mt-2">
          Stay consistent today. Every solved problem brings you closer to your
          dream placement.
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card
          title="Placement Readiness"
          value={`${readiness}%`}
        />

        <Card
          title="Current Streak"
          value="12 Days"
        />

        <Card
          title="Words Learned"
          value={words.length}
        />

        <Card
          title="DSA Completed"
          value={`${dsaCompleted}/${dsaTopics.length}`}
        />
      </div>

      {/* Progress */}
      <h2 className="text-2xl font-bold mt-10 mb-5">
        📈 Progress
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <ProgressCard
          title="DSA Progress"
          completed={dsaCompleted}
          total={dsaTopics.length}
        />

        <ProgressCard
          title="Aptitude Progress"
          completed={aptitudeCompleted}
          total={totalAptitudeTopics}
        />

        <ProgressCard
          title="Words Progress"
          completed={words.length}
          total={1000}
        />

      </div>

      {/* Today's Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

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

          <li>
            ✅ Completed {dsaCompleted} DSA Topics...
          </li>

          <li>
            🧠 Completed {aptitudeCompleted} Aptitude Topics
          </li>

          <li>
            📖 Total Words Learned: {words.length}
          </li>

          <li>
            🎯 Placement Readiness: {readiness}%
          </li>

        </ul>

      </div>

    </MainLayout>
  );
}

export default Dashboard;