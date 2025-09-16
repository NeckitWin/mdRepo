import Menu from "./components/Menu"
import Profile from "./modules/Profile"
import NoteList from "./modules/NoteList"
import NoteActive from "./modules/NoteActive"
import { useAppSelector } from "./app/hooks"
import { selectCurrentNoteId } from "./features/notesSlice"

const App = () => {
  const currentNoteId = useAppSelector(selectCurrentNoteId);
  return (
    <div className="flex p-7 gap-8 flex-wrap md:flex-nowrap">
      {!currentNoteId && <div>
        <Profile />
      </div>}
      <div className={"flex flex-col gap-4 "+(currentNoteId ? "w-[1300px]" : " w-full")}>
        <Menu />
        <NoteList />
      </div>
      {currentNoteId && <NoteActive />}
    </div>
  )
}

export default App
