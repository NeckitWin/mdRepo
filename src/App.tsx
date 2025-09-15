import Menu from "./components/Menu"
import Profile from "./components/Profile"
import NoteList from "./components/NoteList"
import NoteActive from "./components/NoteActive"
import { useAppSelector } from "./app/hooks"
import { selectCurrentNoteId } from "./features/notesSlice"

const App = () => {
  const currentNoteId = useAppSelector(selectCurrentNoteId);
  return (
    <div className="flex p-7 gap-8 flex-wrap md:flex-nowrap">
      {!currentNoteId && <div>
        <Profile />
      </div>}
      <div className="w-full flex flex-col gap-4">
        <Menu />
        <NoteList />
      </div>
      {currentNoteId && <div className="w-full">
        <NoteActive />
      </div>}
    </div>
  )
}

export default App
