import { useState } from "react";
import { useApp } from "../context/AppContext";

function NoteForm() {
  const { notes, setNotes } = useApp();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("DSA");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      description.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      category,
      description,
      createdAt: new Date().toLocaleDateString(),
    };

    setNotes([newNote, ...notes]);

    setTitle("");
    setCategory("DSA");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-5">
        Add Note
      </h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-3 rounded bg-slate-700 mb-4 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="w-full p-3 rounded bg-slate-700 mb-4 outline-none"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>DSA</option>
        <option>Aptitude</option>
        <option>Java</option>
        <option>React</option>
        <option>Node</option>
        <option>MongoDB</option>
        <option>DBMS</option>
        <option>OS</option>
        <option>CN</option>
        <option>HR</option>
        <option>Other</option>
      </select>

      <textarea
        rows="5"
        placeholder="Write your note..."
        className="w-full p-3 rounded bg-slate-700 mb-4 outline-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold"
      >
        Save Note
      </button>
    </form>
  );
}

export default NoteForm;