import MainLayout from "../layouts/MainLayout";
import ProgressPieChart from "../components/charts/ProgressPieChart";
import ProgressBarChart from "../components/charts/ProgressBarChart";

import { useApp } from "../context/AppContext";

import dsaTopics from "../data/dsaTopics";
import aptitudeTopics from "../data/aptitudeTopics";

function Analytics() {
  const {
    dsaCompleted,
    dsaPercentage,

    aptitudeCompleted,
    aptitudePercentage,

    words,
  } = useApp();

  // Total Aptitude Topics
  const totalAptitudeTopics =
    aptitudeTopics.quantitative.length +
    aptitudeTopics.reasoning.length +
    aptitudeTopics.verbal.length;

  // Words Progress (%)
  const wordsPercentage = Math.min(
    (words.length / 1000) * 100,
    100
  );

  // Placement Readiness
  const readiness = Math.round(
    dsaPercentage * 0.4 +
      aptitudePercentage * 0.4 +
      wordsPercentage * 0.2
  );

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          📊 Analytics Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Track your placement preparation progress visually.
        </p>
      </div>

      {/* Statistics Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-gray-400">
            DSA Progress
          </h3>

          <p className="text-4xl font-bold mt-3">
            {dsaPercentage}%
          </p>

          <p className="text-sm text-gray-500 mt-2">
            {dsaCompleted}/{dsaTopics.length} Topics
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-gray-400">
            Aptitude Progress
          </h3>

          <p className="text-4xl font-bold mt-3">
            {aptitudePercentage}%
          </p>

          <p className="text-sm text-gray-500 mt-2">
            {aptitudeCompleted}/{totalAptitudeTopics} Topics
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-gray-400">
            Words Learned
          </h3>

          <p className="text-4xl font-bold mt-3">
            {words.length}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Target: 1000 Words
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-gray-400">
            Placement Readiness
          </h3>

          <p className="text-4xl font-bold mt-3">
            {readiness}%
          </p>

          <p className="text-sm text-green-400 mt-2">
            Keep Going 🚀
          </p>
        </div>

      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <ProgressPieChart
          dsaPercentage={dsaPercentage}
          aptitudePercentage={aptitudePercentage}
          wordsPercentage={wordsPercentage}
        />

        <ProgressBarChart
          dsaCompleted={dsaCompleted}
          dsaTotal={dsaTopics.length}
          aptitudeCompleted={aptitudeCompleted}
          aptitudeTotal={totalAptitudeTopics}
          wordsLearned={words.length}
        />

      </div>

      {/* Summary */}

      <div className="bg-slate-800 rounded-xl p-6 shadow-lg mt-8">

        <h2 className="text-2xl font-bold mb-5">
          📌 Summary
        </h2>

        <ul className="space-y-3 text-gray-300">

          <li>
            ✅ DSA Topics Completed :{" "}
            <strong>{dsaCompleted}</strong>
          </li>

          <li>
            🧠 Aptitude Topics Completed :{" "}
            <strong>{aptitudeCompleted}</strong>
          </li>

          <li>
            📖 Words Learned :{" "}
            <strong>{words.length}</strong>
          </li>

          <li>
            🎯 Placement Readiness :{" "}
            <strong>{readiness}%</strong>
          </li>

        </ul>

      </div>

    </MainLayout>
  );
}

export default Analytics;