import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Figma is a collaborative design tool for creating beautiful user interfaces and prototypes.',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-500'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'CSS3 brings powerful styling capabilities to create stunning, responsive user interfaces.',
    borderColor: 'border-amber-100',
    bgColor: 'bg-amber-100'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'JavaScript powers interactive web experiences, enabling dynamic content and user interactions.',
    borderColor: 'border-pink-400',
    bgColor: 'bg-pink-400'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Node.js is a powerful JavaScript runtime for building scalable web servers and backend applications.',
    borderColor: 'border-purple-400',
    bgColor: 'bg-purple-400'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Express is a minimal Node.js framework for building robust web applications and RESTful APIs.',
    borderColor: 'border-cyan-400',
    bgColor: 'bg-cyan-400'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'MongoDB is a NoSQL database that provides flexible, scalable data storage for modern applications.',
    borderColor: 'border-red-500',
    bgColor: 'bg-red-500'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'React is a powerful JavaScript library for building fast, interactive user interfaces with components.',
    borderColor: 'border-amber-400',
    bgColor: 'bg-amber-400'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'Tailwind CSS is a utility-first framework that speeds up development with pre-built classes.',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-500'
  },
];

const Skill = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12 bg-black">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="inline-block bg-purple-300 text-black px-8 py-3 text-4xl md:text-5xl uppercase mb-4"
            style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif", letterSpacing: '0.05em' }}
          >
            SNACKS
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto mt-6">
            Get up to speed as quickly as possible with these bite-sized courses.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillItem.map(({imgSrc, label, desc, borderColor, bgColor}, key) => (
            <SkillCard 
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              borderColor={borderColor}
              bgColor={bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
