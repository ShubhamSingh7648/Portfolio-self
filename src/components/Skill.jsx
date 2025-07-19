import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

// Skill.jsx
const Skill = () => {
  return (
   <section className="section px-4 sm:px-6 lg:px-8 py-12">
    <div className="container mx-auto max-w-7xl">
        <h2 className='headline-2 text-3xl lg:text-4xl lg:leading-tight font-semibold mb-8'>
            Essential Tools I Use 
        </h2>

        <p className="text-zinc-400 mb-8 max-w-[50ch]">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                skillItem.map(({imgSrc, label, desc}, key) => (
                   <SkillCard 
                   key={key}
                   imgSrc={imgSrc}
                   label={label}
                   desc={desc} />
                ))
            }
        </div>
    </div>
   </section>
  )
}
export default Skill
