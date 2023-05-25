import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/screens/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Car models!</h1>
      <Home />
    </>
  )
}

export default App
