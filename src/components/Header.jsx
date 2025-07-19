import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import "../index.css"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    
    return (
        <header className='fixed top-0 backdrop-blur-lg shadow-xl shadow-zinc-900 left-0 w-full h-16 flex  py-6 items-center z-40 bg-gradient-to-b from-zinc-900/0 px-4'>
            <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6'>
                <h1>
                    <a href="/" className='logo'>
                        <img src="/images/logo.png"
                            width={40}
                            height={40}
                            alt="shubham singh" />
                    </a>
                </h1>
                <div className='relative flex  items-center justify-center'>
                    <button 
                        className='z-50 w-10 h-10 grid md:hidden place-items-center bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform, background-color] active:scale-95'
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                       <span className="material-symbols-rounded w-[1em] overflow-hidden">
                           {navOpen ? 'close' : 'menu'}
                       </span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>
                <a href="#contact" className='max-w-max font-semibold text-zinc-700 h-9 bg-zinc-50 items-center gap-2 px-4 rounded-xl text-sm ring-1 ring-zinc-50/5 ring-inset transition-[background-color] flex  max-md:hidden md:justify-self-end'>Contact Me</a>
            </div>
        </header>
    )
}

export default Header;