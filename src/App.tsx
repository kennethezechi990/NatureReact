import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'


function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <h1 className='africa-one'>Hello Africa</h1>
        <h2>My name is kenneth</h2>
      </div>  
    </>
  )
}

export default App
