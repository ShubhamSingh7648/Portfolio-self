import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/project-1.png',
    title: 'Foodies',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://foodies-blond.vercel.app/'
  },
  {
    imgSrc: '/images/project-2.png',
    title: 'Movie Search',
    tags: ['API', 'SPA'],
    projectLink: 'https://movieapp-smoky-ten.vercel.app/'
  },
  {
    imgSrc: '/images/project-3.png',
    title: 'King Of Diamond',
    tags: ['Development', 'API'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-4.png',
    title: 'Portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://portfolio-t21s.vercel.app/'
  },
  {
    imgSrc: '/images/project-5.png',
    title: 'WonderLust',
    tags: ['Full-Stack', 'Development'],
    projectLink: 'https://wonder-lust-beryl.vercel.app/listings'
  },
];

const Work = () => {
  return (
    <section id="work" className="py-20 px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fireship-header mb-6">MY PROJECTS</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Get up to speed as quickly as possible with these bite-sized project showcases.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
