import MainLayout from "../layouts/MainLayout";
import { useApp } from "../context/AppContext";
import dsaTopics from "../data/dsaTopics";
import aptitudeTopics from "../data/aptitudeTopics";

function Profile() {
  const {
    dsaCompleted,
    dsaPercentage,
    aptitudeCompleted,
    aptitudePercentage,
    words,
    notes,
  } = useApp();

  const totalAptitude =
    aptitudeTopics.quantitative.length +
    aptitudeTopics.reasoning.length +
    aptitudeTopics.verbal.length;

  const readiness = Math.round(
    dsaPercentage * 0.4 +
      aptitudePercentage * 0.4 +
      Math.min((words.length / 1000) * 100, 100) * 0.2
  );

  return (
    <MainLayout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">
          👤 My Profile
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold">Student</h2>

            <p className="mt-3 text-gray-300">
              Name: Guest User
            </p>

            <p className="text-gray-300">
              University: Parul University
            </p>

            <p className="text-gray-300">
              Target: Product Based Company
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              DSA Progress
            </h2>

            <p className="text-4xl font-bold mt-4">
              {dsaPercentage}%
            </p>

            <p className="text-gray-400 mt-2">
              {dsaCompleted}/{dsaTopics.length} Topics
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Aptitude
            </h2>

            <p className="text-4xl font-bold mt-4">
              {aptitudePercentage}%
            </p>

            <p className="text-gray-400 mt-2">
              {aptitudeCompleted}/{totalAptitude} Topics
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Words Learned
            </h2>

            <p className="text-4xl font-bold mt-4">
              {words.length}
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Notes
            </h2>

            <p className="text-4xl font-bold mt-4">
              {notes.length}
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Placement Readiness
            </h2>

            <p className="text-4xl font-bold mt-4">
              {readiness}%
            </p>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;