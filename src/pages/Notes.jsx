import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";
import { useApp } from "../context/AppContext";

function Notes() {
  const { notes } = useApp();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || note.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold">
            📝 Notes
          </h1>

          <p className="text-gray-400 mt-2">
            Save your interview, DSA and revision notes.
          </p>
        </div>

        <NoteForm />

        <div className="bg-slate-800 p-6 rounded-xl">

          <h2 className="text-2xl font-bold mb-5">
            Your Notes
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">

            <input
              type="text"
              placeholder="Search by title..."
              className="p-3 rounded bg-slate-700 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="p-3 rounded bg-slate-700 outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All</option>
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

          </div>

          {filteredNotes.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              No Notes Found
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {filteredNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </MainLayout>
  );
}

export default Notes;