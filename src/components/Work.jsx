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
    imgSrc: '/images/project-1.png',
    title: 'React App',
    desc: 'The interactive way to master modern React applications.',
    tags: ['React', 'Frontend'],
    projectLink: '',
    cardColor: 'card-amber'
  },
];

const Work = () => {
  return (
    <section id="work" className="py-12 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header with Side Images */}
        <div className="text-center mb-8 relative">
          
          {/* Left Image - Fixed 150x150px, hidden on mobile */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
            <img 
              src="/images/hello3.png" 
              alt="Decoration"
              className="animate-float"
              style={{ 
                width: '150px', 
                height: '150px',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Center Image with Title */}
          <div className="fireship-header mb-4 flex justify-center items-center">
            <img 
              src="/images/projects.png" 
              alt="My Projects" 
              className="h-56 md:h-72 lg:h-80 w-auto object-contain animate-float"
              style={{ maxWidth: '900px' }}
            />
          </div>

          {/* Right Image - Fixed 150x150px, hidden on mobile */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <img 
              src="/images/hello4.png" 
              alt="Decoration"
              className="animate-float"
              style={{ 
                width: '150px', 
                height: '150px',
                objectFit: 'contain',
                animationDelay: '1s'
              }}
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl font-bold text-zinc-300 max-w-2xl mx-auto text-center mb-8">
          Some of my projects that helped me learn.
        </p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mt-8 justify-items-center">
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