import Menu from "./components/Menu"
import Profile from "./components/Profile"
import NoteList from "./components/NoteList"

const App = () => {
  return (
    <div className="flex p-7 gap-8 flex-wrap md:flex-nowrap">
      <div>
        <Profile />
      </div>
      <div className="w-full flex flex-col gap-4">
        <Menu />
        <NoteList />
      </div>
    </div>
  )
}

export default App
