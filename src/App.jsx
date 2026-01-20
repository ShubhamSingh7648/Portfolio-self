import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>
  )
}

export default App
