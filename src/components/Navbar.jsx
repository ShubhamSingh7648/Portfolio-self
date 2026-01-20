import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  }

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);
    return () => window.removeEventListener('resize', initActiveBox);
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('text-emerald-400');
    event.target.classList.add('text-emerald-400');
    lastActiveLink.current = event.target;
    
    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
  }

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Skills',
      link: '#skills',
      className: 'nav-link'
    },
  
  ];

  return (
    <nav className={`${navOpen ? 'flex flex-col p-6' : 'flex'} items-center gap-2 relative`}>
      {navItems.map(({label, link, className, ref}, key) => (
        <a 
          href={link}
          key={key}
          ref={ref}
          className="px-5 py-2.5 text-sm font-bold tracking-wide text-zinc-400 hover:text-emerald-400 transition-colors duration-300 relative z-10 uppercase"
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      
      <div 
        className="absolute bg-emerald-400/10 rounded-lg transition-all duration-300 hidden md:block"
        ref={activeBox}
      ></div>
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}

export default Navbar;
