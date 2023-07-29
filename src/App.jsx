import React, { useState } from 'react'
import Charts from './components/Charts'
import './App.css'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Twitter from './pages/Twitter'



const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Twitter />} />
        <Route path='/charts' element={<Charts />} />

      </Routes>
    </>
  )
}

export default App