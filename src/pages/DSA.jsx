import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import dsaTopics from "../data/dsaTopics";
import DSATopicCard from "../components/DSATopicCard";

function DSA() {
  const [completed, setCompleted] = useState({});

  // Load saved progress
  useEffect(() => {
    const saved = localStorage.getItem("dsaProgress");

    if (saved) {
      setCompleted(JSON.parse(saved));
    }
  }, []);

  // Save progress whenever completed changes
  useEffect(() => {
    localStorage.setItem("dsaProgress", JSON.stringify(completed));
  }, [completed]);

  // Toggle checkbox
  const toggleTopic = (topic) => {
    setCompleted((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  const total = dsaTopics.length;

  const done = dsaTopics.filter((topic) => completed[topic]).length;

  const percentage = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">📚 DSA Tracker</h1>

        <p className="text-gray-400 mt-2">
          Track your DSA preparation.
        </p>
      </div>

      {/* Progress Card */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-lg mb-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">
            Overall Progress
          </h2>

          <span className="font-bold text-indigo-400">
            {percentage}%
          </span>
        </div>

        <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden">
          <div
            className="bg-indigo-500 h-4 transition-all duration-500"
            style={{
              width: `${percentage}%`,
            }}
          ></div>
        </div>

        <p className="mt-4 text-gray-400">
          {done} / {total} Topics Completed
        </p>
      </div>

      {/* Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dsaTopics.map((topic) => (
          <DSATopicCard
            key={topic}
            topic={topic}
            checked={completed[topic] || false}
            onChange={() => toggleTopic(topic)}
          />
        ))}
      </div>
    </MainLayout>
  );
}

export default DSA;