import React from 'react'
import Header from './components/header/Header'
import { Hero } from './components/hero/Hero'
import Content from './components/content/Content'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className='app'>
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App