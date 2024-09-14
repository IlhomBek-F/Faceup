import { Header } from './components/Header/Header'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        {Array.from({ length: 10 }).map((k, i) => {
          return <div className='cube' key={i}>{i}</div>
        })}
      </div>
    </>
  )
}

export default App
