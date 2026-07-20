import { useState } from "react";

function WordForm({ addWord }) {
  const [english, setEnglish] = useState("");
  const [hindi, setHindi] = useState("");
  const [sentence, setSentence] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!english || !hindi || !sentence) {
      alert("Please fill all fields");
      return;
    }

    addWord({
      id: Date.now(),
      english,
      hindi,
      sentence,
    });

    setEnglish("");
    setHindi("");
    setSentence("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-6 rounded-xl"
    >

      <h2 className="text-2xl font-bold mb-5">
        Add New Word
      </h2>

      <input
        type="text"
        placeholder="English Word"
        className="w-full bg-slate-700 p-3 rounded mb-4"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
      />

      <input
        type="text"
        placeholder="Hindi Meaning"
        className="w-full bg-slate-700 p-3 rounded mb-4"
        value={hindi}
        onChange={(e) => setHindi(e.target.value)}
      />

      <textarea
        placeholder="Example Sentence"
        className="w-full bg-slate-700 p-3 rounded mb-4"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />

      <button
        className="bg-indigo-600 px-5 py-2 rounded hover:bg-indigo-700"
      >
        Add Word
      </button>

    </form>
  );
}

export default WordForm;