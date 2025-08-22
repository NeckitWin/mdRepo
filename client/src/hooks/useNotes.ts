import { useState } from "react";
import type { Note } from "../types/note";

const initialNotes: Note[] = [
  {
    id: "1",
    title: "Example Note",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nostrum exercitationem repellat, voluptatem laboriosam at corrupti commodi nesciunt quia voluptates vitae, officia iste saepe explicabo aliquid maxime omnis, excepturi qui. Reprehenderit exercitationem distinctio vero nemo neque minima consequuntur nulla sequi quidem a enim sed, incidunt quod accusamus voluptas nihil ipsa magnam velit sapiente nesciunt, dicta soluta illum commodi. Consequuntur, magnam.",
    date: "2025-08-20",
    tags: ["Test", "Test2", "Test3"]
  }
];

export const useNotes = () => {
  const [notesList, setNotesList] = useState<Note[]>(initialNotes);

  const addNote = () => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: "New Note",
      content: "",
      date: new Date().toISOString().split("T")[0],
      tags: []
    };
    setNotesList((prev) => [...prev, newNote]);
  };

  const deleteAllNotes = () => {
    setNotesList([]);
  };

  return {
    notesList,
    addNote,
    deleteAllNotes
  };
};