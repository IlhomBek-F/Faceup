import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        {Array.from({ length: 10 }).map((k, i) => {
          return <div className='cube'>{i}</div>
        })}
      </div>
    </>
  )
}

export default App
