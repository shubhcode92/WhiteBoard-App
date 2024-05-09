// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import './App.css'

import {Route, Routes} from 'react-router-dom';
import Forms from './components/Forms'
import RoomPage from './pages/RoomPage';

const App = () => {

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Forms />}></Route>
        <Route path='/:roomId' element={<RoomPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
