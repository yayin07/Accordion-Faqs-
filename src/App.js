import React from 'react'
import "./App.css"
import "./index.css"
import './css/clash-display.css'
import Frequently from './components/Frequently'

function App() {
  return (
    <div className='font-[ClashDisplay]'>
      <div className='bg-blue-500 text-center' >header </div>
      <Frequently />
      <div className='bg-blue-500 text-center' >foooter </div>
    </div>
  )
}

export default App
