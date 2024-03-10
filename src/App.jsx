import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadData from './LoadData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoadData></LoadData>
    </>
  )
}

export default App
