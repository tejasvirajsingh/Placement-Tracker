import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import WordForm from "../components/WordForm";
import WordCard from "../components/WordCard";
import { useApp } from "../context/AppContext";

function Words() {
  const { words, setWords } = useApp();

  const [search, setSearch] = useState("");

  // Add New Word
  const addWord = (newWord) => {
    setWords((prev) => [newWord, ...prev]);
  };

  // Delete Word
  const deleteWord = (id) => {
    setWords((prev) => prev.filter((word) => word.id !== id));
  };

  // Toggle Remembered
  const toggleRemembered = (id) => {
    setWords((prev) =>
      prev.map((word) =>
        word.id === id
          ? { ...word, remembered: !word.remembered }
          : word
      )
    );
  };

  // Search
  const filteredWords = words.filter((word) =>
    word.english.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6">
        📖 Words
      </h1>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div className="bg-slate-800 rounded-xl p-5 shadow">
          <h2 className="text-gray-400">Total Words</h2>

          <h1 className="text-4xl font-bold mt-3">
            {words.length}
          </h1>
        </div>

        <div className="bg-slate-800 rounded-xl p-5 shadow">
          <h2 className="text-gray-400">Remembered</h2>

          <h1 className="text-4xl font-bold mt-3">
            {words.filter((word) => word.remembered).length}
          </h1>
        </div>

        <div className="bg-slate-800 rounded-xl p-5 shadow">
          <h2 className="text-gray-400">Daily Target</h2>

          <h1 className="text-4xl font-bold mt-3">
            20
          </h1>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search Words..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-slate-800 p-4 rounded-xl mb-6 outline-none"
      />

      {/* Add Word */}
      <WordForm addWord={addWord} />

      {/* Words List */}
      <div className="grid md:grid-cols-2 gap-5 mt-6">
        {filteredWords.length === 0 ? (
          <div className="bg-slate-800 p-6 rounded-xl text-center col-span-2">
            <h2 className="text-xl text-gray-400">
              No words found.
            </h2>
          </div>
        ) : (
          filteredWords.map((word) => (
            <WordCard
              key={word.id}
              word={word}
              deleteWord={deleteWord}
              toggleRemembered={toggleRemembered}
            />
          ))
        )}
      </div>
    </MainLayout>
  );
}

export default Words;