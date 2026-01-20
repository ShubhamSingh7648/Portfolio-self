import React from 'react'
import PropTypes from 'prop-types';

const borderColors = [
  'border-emerald-400',
  'border-cyan-400',
  'border-pink-500',
  'border-amber-400',
  'border-purple-500',
  'border-rose-500'
];

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes
}) => {
  const randomBorder = borderColors[Math.floor(Math.random() * borderColors.length)];
  
  return (
    <div className={`fireship-card ${randomBorder} overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] group ${classes}`}>
      {/* Project Image */}
      <figure className="w-full h-52 bg-zinc-800 overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </figure>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-2xl font-black text-zinc-50 mb-3 uppercase tracking-wide">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, key) => (
            <span 
              key={key}
              className="px-3 py-1 bg-zinc-950 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {projectLink && (
          <a 
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wide"
          >
            View Project
            <span className="text-lg">→</span>
          </a>
        )}
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string
}

export default ProjectCard
