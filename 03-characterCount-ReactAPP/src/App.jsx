import './App.css'

import { ThemeProvider } from './contextProvider/ThemeContext'

import Navbar from './components/headers/Navbar'
import Counter from './components/Counter'

function App() {


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
      <Counter />
    </ThemeProvider>
  )
}

export default App
