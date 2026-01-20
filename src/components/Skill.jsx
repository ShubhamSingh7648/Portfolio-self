import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/figmalogo.png',
    label: 'Figma',
    desc: 'Figma is a collaborative design tool for creating beautiful user interfaces and prototypes.',
    cardColor: 'card-green'
  },
  {
    imgSrc: '/images/css.jpg',
    label: 'CSS',
    desc: 'CSS3 brings powerful styling capabilities to create stunning, responsive user interfaces.',
    cardColor: 'card-beige'
  },
  {
    imgSrc: '/images/jslogo.png',
    label: 'JavaScript',
    desc: 'JavaScript powers interactive web experiences, enabling dynamic content and user interactions.',
    cardColor: 'card-pink'
  },
  {
    imgSrc: '/images/nodelogo.png',
    label: 'NodeJS',
    desc: 'Node.js is a powerful JavaScript runtime for building scalable web servers and backend applications.',
    cardColor: 'card-purple'
  },
  {
    imgSrc: '/images/expresslogo.png',
    label: 'ExpressJS',
    desc: 'Express is a minimal Node.js framework for building robust web applications and RESTful APIs.',
    cardColor: 'card-cyan'
  },
  {
    imgSrc: '/images/mongologo.png',
    label: 'MongoDB',
    desc: 'MongoDB is a NoSQL database that provides flexible, scalable data storage for modern applications.',
    cardColor: 'card-red'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'React is a powerful JavaScript library for building fast, interactive user interfaces with components.',
    cardColor: 'card-amber'
  },
  {
    imgSrc: '/images/tailwindlogo.png',
    label: 'TailwindCSS',
    desc: 'Tailwind CSS is a utility-first framework that speeds up development with pre-built classes.',
    cardColor: 'card-green'
  },
];

const Skill = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header with Side Images */}
        <div className="text-center mb-12 relative">
          
          {/* Left Image - Fixed 120x120px, hidden on mobile */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
            <img 
              src="/images/hello.png" 
              alt="Decoration"
              className="animate-float"
              style={{ 
                width: '120px', 
                height: '120px',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Center Header */}
          <h2 
            className="inline-block bg-purple-300 text-black px-8 py-3 text-4xl md:text-5xl uppercase mb-4"
            style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif", letterSpacing: '0.05em' }}
          >
            SNACKS
          </h2>

          {/* Right Image - Fixed 120x120px, hidden on mobile */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <img 
              src="/images/hello2.png" 
              alt="Decoration"
              className="animate-float"
              style={{ 
                width: '120px', 
                height: '120px',
                objectFit: 'contain',
                animationDelay: '1.5s'
              }}
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-zinc-300 font-bold max-w-2xl mx-auto mt-6 mb-12 text-center">
          Here are some <span className="text-orange-500 font-bold">Tools</span>. That is use to talk to computers
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillItem.map(({imgSrc, label, desc, cardColor}, key) => (
            <SkillCard 
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              cardColor={cardColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill