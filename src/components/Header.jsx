import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800/50">
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6">

        {/* Mobile Layout - Logo + Name on left, nothing else */}
        <div className="md:hidden flex items-center">
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
        </div>

        {/* Desktop Layout - Logo left, Nav center, Contact right */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center">

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
          <div className="flex items-center justify-end">
            <a 
              href="#contact" 
              className="flex items-center gap-2 h-11 px-6 rounded-full border-2 border-yellow-500 text-yellow-500 font-semibold text-sm tracking-wide hover:bg-yellow-500 hover:text-zinc-950 transition-all duration-200"
            >
              CONTACT
            </a>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header;