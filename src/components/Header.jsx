import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800/50">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_auto_1fr]">
        
        {/* Logo and Name - Left */}
        <div className="flex items-center gap-3">
          {/* CUSTOM IMAGE LOGO - Fixed 40x40px size */}
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br overflow-hidden">
            <img 
              src="/images/navLogo.png" 
              alt="Logo"
              className="w-full h-full object-cover"
              style={{ width: '40px', height: '40px' }}
            />
          </div>
          
          <span 
            className="logo-name text-3xl text-[#00d3f2] tracking-wider"
            style={{
              textShadow: '0 0 20px rgba(0, 211, 242, 0.5)'
            }}
          >
            SHUBHAM
          </span>
        </div>

        {/* Desktop Navigation - Center */}
        <Navbar navOpen={navOpen} />

        {/* Contact Button - Right */}
        <div className="flex items-center justify-end gap-4">
          <a 
            href="#contact" 
            className="hidden md:flex items-center gap-2 h-11 px-6 rounded-full border-2 border-yellow-500 text-yellow-500 font-semibold text-sm tracking-wide hover:bg-yellow-500 hover:text-zinc-950 transition-all duration-200"
          >
            CONTACT
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-zinc-800 transition-colors"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="material-symbols-rounded text-2xl">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-800 transition-all duration-300 ${navOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="px-4 py-6">
          <ul className="flex flex-col gap-4">
            <li><a href="#home" className="block py-2 text-zinc-50 hover:text-emerald-400 transition-colors" onClick={() => setNavOpen(false)}>Home</a></li>
            <li><a href="#about" className="block py-2 text-zinc-50 hover:text-emerald-400 transition-colors" onClick={() => setNavOpen(false)}>About</a></li>
            <li><a href="#skills" className="block py-2 text-zinc-50 hover:text-emerald-400 transition-colors" onClick={() => setNavOpen(false)}>Skills</a></li>
            <li><a href="#work" className="block py-2 text-zinc-50 hover:text-emerald-400 transition-colors" onClick={() => setNavOpen(false)}>Work</a></li>
            <li>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full border-2 border-yellow-500 text-yellow-500 font-semibold text-sm tracking-wide hover:bg-yellow-500 hover:text-zinc-950 transition-all duration-200"
                onClick={() => setNavOpen(false)}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;