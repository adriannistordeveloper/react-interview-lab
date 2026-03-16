import { useState } from "react";

const Rendering4Exercise = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [temporaryNote, setTemporaryNote] = useState("");
  const [editMode, setEditMode] = useState<number | null>(null);
  const [editModeNote, setEditModeNote] = useState("");

  const addNote = () => {
    if (!temporaryNote.trim()) return;
    setNotes([...notes, temporaryNote]);
    setTemporaryNote("");
  };

  const deleteAll = () => setNotes([]);

  const startEdit = (index: number, note: string) => {
    setEditMode(index);
    setEditModeNote(note);
  };

  const saveUpdatedNote = () => {
    if (editMode === null) return;

    const updatedNotes = [...notes];
    updatedNotes[editMode] = editModeNote;
    setNotes(updatedNotes);

    setEditMode(null);
    setEditModeNote("");
  };

  return (
    <>
      <input
        value={temporaryNote}
        onChange={(e) => setTemporaryNote(e.target.value)}
      />
      <button onClick={addNote}>Add note</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => startEdit(index, note)}>Edit note</button>
          </li>
        ))}
      </ul>

      {editMode !== null ? (
        <>
          <input
            value={editModeNote}
            onChange={(e) => setEditModeNote(e.target.value)}
          />
          <button onClick={saveUpdatedNote}>Add updated note</button>
        </>
      ) : null}

      <button onClick={deleteAll}>Delete all notes</button>
    </>
  );
};

export default Rendering4Exercise;