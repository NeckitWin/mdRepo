import Profile from "./components/Profile"

const App = () => {
  return (
    <div className="flex p-8">
      <div>
        <Profile />
      </div>
      <div>
        <h3>Bio</h3>
        <p>
          Passionate frontend developer with 3+ years of experience building modern web applications. 
          Specializes in React, TypeScript, and creating intuitive user interfaces. 
          Currently working on personal projects including a Markdown notes application. 
          When not coding, enjoys exploring new technologies, gaming, and contributing to open-source projects. 
          Always eager to learn and collaborate on innovative solutions.
        </p>
      </div>
    </div>
  )
}

export default App
