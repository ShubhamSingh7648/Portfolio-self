import React from 'react'
import ProjectCard from './ProjectCard';
const works = [
    {
      imgSrc: '/images/project-1.png',
      title: 'foodies',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'Movie search',
      tags: ['API', 'SPA'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.png',
      title: 'King Of Diamond',
      tags: ['Development', 'API'],
      projectLink: ''
    },
    {
      imgSrc: '/images/project-4.png',
      title: 'portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/https://portfolio-t21s.vercel.app/'
    },
    {
      imgSrc: '/images/project-5.png',
      title: 'Online hotel reservation',
      tags: [ 'Development'],
      projectLink: 'https://wonder-lust-beryl.vercel.app/listings'
    },

  ];

const Work = () => {
  return (
    <section id="work" className='section px-4 sm:px-6 lg:px-8 py-12'>
        <div className="container mx-auto max-w-7xl">
            <h2 className="headline-2 mb-8 text-3xl lg:text-4xl lg:leading-tight font-semibold text-center md:text-left">
                My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="w-full" // Ensure cards take full grid width
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work