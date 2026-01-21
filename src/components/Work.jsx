import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/FOODIES.png',
    title: 'Foodies',
    desc: 'The interactive way to master modern food delivery apps.',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://foodies-blond.vercel.app/',
    cardColor: 'card-cyan'
  },
  {
    imgSrc: '/images/MOVIE-1.png',
    title: 'Movie Search',
    desc: 'Master React with mystifying ease with this movie app.',
    tags: ['API', 'SPA'],
    projectLink: 'https://movieapp-smoky-ten.vercel.app/',
    cardColor: 'card-beige'
  },
  {
    imgSrc: '/images/project-3.png',
    title: 'King Of Diamond',
    desc: 'The interactive way to master modern e-commerce.',
    tags: ['Development', 'API'],
    projectLink: '',
    cardColor: 'card-pink'
  },
  {
    imgSrc: '/images/project-4.png',
    title: 'Portfolio',
    desc: 'The interactive way to master modern portfolio design.',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://portfolio-t21s.vercel.app/',
    cardColor: 'card-purple'
  },
  {
    imgSrc: '/images/HOTEL.png',
    title: 'WonderLust',
    desc: 'The interactive way to master modern travel booking.',
    tags: ['Full-Stack', 'Development'],
    projectLink: 'https://wonder-lust-beryl.vercel.app/listings',
    cardColor: 'card-green'
  },
  {
    imgSrc: '/images/project-6.png',
    title: 'Contact Manager',
    desc: 'The interactive way to master modern React applications.',
    tags: ['React', 'Frontend', 'CRUD'],
    projectLink: 'https://contact-management-wesbite.vercel.app/',
    cardColor: 'card-amber'
  },
];

const Work = () => {
  return (
    <section id="work" className="py-8 md:py-12 px-4 md:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header with Side Images */}
        <div className="text-center mb-6 md:mb-8 relative">
          
          {/* Left Image - BIGGER, hidden on mobile/tablet */}
          <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2" style={{ left: '-10px' }}>
            <img 
              src="/images/hello3.png" 
              alt="Decoration"
              className="animate-float w-44 h-44 2xl:w-52 2xl:h-52"
              style={{ 
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Center Image with Title - Responsive */}
          <div className="fireship-header mb-2 md:mb-4 flex justify-center items-center">
            <img 
              src="/images/projects.png" 
              alt="My Projects" 
              className="h-32 sm:h-40 md:h-56 lg:h-72 xl:h-80 w-auto object-contain animate-float"
              style={{ maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>

          {/* Right Image - BIGGER, hidden on mobile/tablet */}
          <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2" style={{ right: '-10px' }}>
            <img 
              src="/images/hello4.png" 
              alt="Decoration"
              className="animate-float w-44 h-44 2xl:w-52 2xl:h-52"
              style={{ 
                objectFit: 'contain',
                animationDelay: '1s'
              }}
            />
          </div>
        </div>

        {/* Subtitle - Responsive */}
        <p className="text-base sm:text-lg md:text-xl font-bold text-zinc-300 max-w-2xl mx-auto text-center mb-6 md:mb-8">
          Some of my projects that helped me learn.
        </p>

        {/* Projects Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 justify-items-center">
          {works.map(({ imgSrc, title, desc, tags, projectLink, cardColor }, key) => (
            <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              desc={desc}
              tags={tags}
              projectLink={projectLink}
              cardColor={cardColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work