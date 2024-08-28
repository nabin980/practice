import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskOne from './pages/TaskOne'
import TaskTwo from './pages/TaskTwo'
import TaskThree from './pages/TaskThree'
import TaskFour from './pages/TaskFour'
import TaskFive from './pages/TaskFive'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<TaskOne/>}/>
        <Route path='/tasktwo' element={<TaskTwo/>}/>
        <Route path='/taskthree' element={<TaskThree/>}/>
        <Route path='/taskfour' element={<TaskFour/>}/>
        <Route path='/taskfive' element={<TaskFive/>}/>
      </Routes>
    </div>
  )
}

export default App