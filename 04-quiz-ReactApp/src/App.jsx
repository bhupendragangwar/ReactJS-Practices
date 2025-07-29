import './App.css'

import Navbar from './component/Navbar'
import { ThemeProvider } from './Provider/ThemeProvider'

import WelComeScreen from './component/WelcomeQuizes'
// import ScoreScreen from './component/ScoreScreen'

function App() {

  return (
    <>
      <ThemeProvider>
        <Navbar />
        {/* <ScoreScreen /> */}
        <WelComeScreen />
      </ThemeProvider>
    </>
  )
}

export default App
