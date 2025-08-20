import Search from "./components/Search"
import Profile from "./components/Profile"

const App = () => {
  return (
    <div className="flex p-7 gap-8">
      <div>
        <Profile />
      </div>
      <div className="w-full">
        <Search />
      </div>
    </div>
  )
}

export default App
