import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  'bulma/css/bulma.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage/GamePage'
import StatisticsPage from './pages/StatisticsPage/StatisticsPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import GameList from './pages/GameList/GameList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <GamePage /> }/>
          <Route path="/s" element={ <StatisticsPage /> } />
          <Route path="/d" element={ <DetailsPage /> } />
          <Route path='/l' element= { <GameList /> } />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
