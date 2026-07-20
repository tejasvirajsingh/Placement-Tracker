import MainLayout from "../layouts/MainLayout";
import AptitudeCategory from "../components/AptitudeCategory";
import aptitudeTopics from "../data/aptitudeTopics";
import { useApp } from "../context/AppContext";

function Aptitude() {
  const {
    aptitude,
    setAptitude,
    aptitudeCompleted,
    aptitudePercentage,
  } = useApp();

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6">
        🧠 Aptitude Tracker
      </h1>

      {/* Progress Card */}
      <div className="bg-slate-800 rounded-xl p-6 mb-8">
        <div className="flex justify-between mb-3">
          <h2 className="text-xl font-semibold">
            Overall Progress
          </h2>

          <span className="font-bold">
            {aptitudePercentage}%
          </span>
        </div>

        <div className="w-full bg-slate-700 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{
              width: `${aptitudePercentage}%`,
            }}
          ></div>
        </div>

        <p className="mt-3 text-gray-300">
          {aptitudeCompleted} Topics Completed
        </p>
      </div>

      <AptitudeCategory
        title="📘 Quantitative Aptitude"
        topics={aptitudeTopics.quantitative}
        aptitude={aptitude}
        setAptitude={setAptitude}
      />

      <AptitudeCategory
        title="🧩 Logical Reasoning"
        topics={aptitudeTopics.reasoning}
        aptitude={aptitude}
        setAptitude={setAptitude}
      />

      <AptitudeCategory
        title="📝 Verbal Ability"
        topics={aptitudeTopics.verbal}
        aptitude={aptitude}
        setAptitude={setAptitude}
      />
    </MainLayout>
  );
}

export default Aptitude;