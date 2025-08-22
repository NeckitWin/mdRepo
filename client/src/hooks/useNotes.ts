import { useState } from "react";
import type { Note } from "../types/note";

export const useNotes = (initialNotes: Note[]) => {
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