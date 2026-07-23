import { Trash2 } from "lucide-react";
import { useApp } from "../context/AppContext";

function NoteCard({ note }) {
  const { notes, setNotes } = useApp();

  const deleteNote = () => {
    const updatedNotes = notes.filter(
      (item) => item.id !== note.id
    );

    setNotes(updatedNotes);
  };

  return (
    <div className="bg-slate-800 p-5 rounded-xl shadow-lg">
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-xl font-bold">
            {note.title}
          </h2>

          <span className="text-sm text-blue-400">
            {note.category}
          </span>
        </div>

        <button onClick={deleteNote}>
          <Trash2 className="text-red-500" />
        </button>

      </div>

      <p className="mt-4 text-gray-300">
        {note.description}
      </p>

      <p className="text-sm text-gray-500 mt-5">
        {note.createdAt}
      </p>
    </div>
  );
}

export default NoteCard;