import Menu from "./components/Menu"
import Profile from "./components/Profile"
import NoteList from "./components/NoteList"
import type { Note } from "./types/note";
import { useState } from "react";


const notes: Note[] = [
  {
    id: "1",
    title: "Example Note",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nostrum exercitationem repellat, voluptatem laboriosam at corrupti commodi nesciunt quia voluptates vitae, officia iste saepe explicabo aliquid maxime omnis, excepturi qui. Reprehenderit exercitationem distinctio vero nemo neque minima consequuntur nulla sequi quidem a enim sed, incidunt quod accusamus voluptas nihil ipsa magnam velit sapiente nesciunt, dicta soluta illum commodi. Consequuntur, magnam.",
    date: "2025-08-20",
    tags: ["Test", "Test2", "Test3"]
  }
];

const App = () => {
  const [notesList, setNotesList] = useState<Note[]>(notes);

  const addNote = () => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: "New Note",
      content: "",
      date: new Date().toISOString().split("T")[0],
      tags: []
    };
    setNotesList((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <div className="flex p-7 gap-8 flex-wrap md:flex-nowrap">
      <div>
        <Profile />
      </div>
      <div className="w-full flex flex-col gap-4">
        <Menu addNote={addNote} />
        <NoteList notesList={notesList} />
      </div>
    </div>
  )
}

export default App
