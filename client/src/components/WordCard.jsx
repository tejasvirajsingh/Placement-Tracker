import { FaTrash, FaCheckCircle } from "react-icons/fa";

function WordCard({ word, deleteWord, toggleRemembered }) {
  return (
    <div className="bg-slate-800 rounded-xl p-5 shadow-lg hover:scale-[1.02] transition">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          {word.english}
        </h2>

        <div className="flex gap-4 text-xl">

          <button
            onClick={() => toggleRemembered(word.id)}
            className={`${
              word.remembered ? "text-green-400" : "text-gray-400"
            }`}
          >
            <FaCheckCircle />
          </button>

          <button
            onClick={() => deleteWord(word.id)}
            className="text-red-500"
          >
            <FaTrash />
          </button>

        </div>

      </div>

      <p className="text-green-400 mt-2">
        {word.hindi}
      </p>

      <p className="text-gray-400 mt-3">
        {word.sentence}
      </p>

    </div>
  );
}

export default WordCard;