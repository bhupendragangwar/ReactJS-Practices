import './App.css'
import { useState } from 'react'

import CalculateForm from './components/CalculateForm'
import ResultDisplay from './components/ResultDisplay'


function App() {
  const [result, setResult] = useState(null)

  return (
    <>
      <p >
        Repayment Calculator
        {/* <CalculateForm onResult = {setResult}/> */}
        {!result ? (<CalculateForm onResult = {setResult}/>) : (<ResultDisplay {...result}/>) }
      </p>
    </>
  )
}

export default App
