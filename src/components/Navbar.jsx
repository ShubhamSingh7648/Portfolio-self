import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  }

  useEffect(initActiveBox, []);
  window.addEventListener('resize', initActiveBox); 
  
  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('text-zinc-50');
    event.target.classList.add('text-black');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  }
  
  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-500  transition-colors',

      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-500  transition-colors'

    },
    {
      label: 'Work',
      link: '#work',
      className: 'grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-500  transition-colors'

    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-500  transition-colors'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-500  transition-colors'

    }
  ];

  return (
    <nav className={`absolute md:relative md:flex md:visible top-full mt-2 right-0 min-w-40 p-2 bg-zinc-50/10 rounded-2xl ring-inset ring-1 ring-zinc-50/55 scale-90 invisible opacity-0 md:opacity-100 backdrop-blur-xs transition-all duration-300 ease-in-out ${navOpen ? 'opacity-100 scale-100 visible' : ''}`}>
      {navItems.map(({label, link, className, ref}, key) => (
        <a href={link} className={className} key={key} ref={ref} onClick={activeCurrentLink}>
          {label}
        </a>
      ))}
      <div 
        className="absolute top-2 left-2 right-2 h-9 bg-zinc-50 rounded-lg -z-10 transition-[top, left] duration-500" 
        ref={activeBox}
      ></div>
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}

export default Navbar;