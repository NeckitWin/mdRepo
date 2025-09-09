import Menu from "./components/Menu"
import Profile from "./components/Profile"
import NoteList from "./components/NoteList"
import { useNotes } from "./hooks/useNotes";

const App = () => {
  const {notesList, addNote, deleteNote, deleteAllNotes} = useNotes();

  return (
    <div className="flex p-7 gap-8 flex-wrap md:flex-nowrap">
      <div>
        <Profile />
      </div>
      <div className="w-full flex flex-col gap-4">
        <Menu addNote={addNote} deleteAllNotes={deleteAllNotes} />
        <NoteList notesList={notesList} deleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default App
