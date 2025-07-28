import './App.css'
// import Home from './components/Home'

import { ThemeProvider } from './contextProvider/ThemeContext'

// import useTheme from './components/ThemeToggle'
import Navbar from './components/headers/Navbar'

function App() {

  // const { theme, toggleTheme } = useTheme('light')

  return (
    // <div
    // style = {{
    //   height: "100vh",
    //     transition: "0.3s ease-in",
    //     colorScheme: "light dark",
    //   color : theme === 'light' ? 'white' : '#242424',
    //   backgroundColor: theme === 'light' ? '#242424' : 'white'
    // }}
    // >
    //   <Navbar />
    //   <button onClick={toggleTheme}
    //   style={{
    //     background: theme === "light" ? "white" : "black",
    //       color: theme === "light" ? "black" : "white",
    //   }}
    //   >
    //     toggleTheme
    //   </button>
    //   <h2>Character Cout Project</h2>

    //   <Home />
    // </div>

    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  )
}

export default App
