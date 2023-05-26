import { useState } from 'react'
import Home from './components/screens/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrap'>
      <h1>Car models!</h1>
      <Home />
    </div>
  )
}

export default App
