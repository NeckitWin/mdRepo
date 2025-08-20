import Search from "./components/Search"
import Profile from "./components/Profile"
import Notes from "./components/Notes"

const App = () => {
  return (
    <div className="flex p-7 gap-8 flex-wrap md:flex-nowrap">
      <div>
        <Profile />
      </div>
      <div className="w-full flex flex-col gap-4">
        <Search />
        <Notes />
      </div>
    </div>
  )
}

export default App
