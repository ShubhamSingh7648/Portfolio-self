import React from 'react'
import PropTypes from 'prop-types';

const ProjectCard = ({
  imgSrc,
  title,
  desc,
  tags,
  projectLink,
  cardColor,
  classes
}) => {
  return (
    <article 
      className={`fireship-card ${cardColor} max-w-[350px] ${classes}`}
      style={{ filter: 'drop-shadow(8px 8px 0px rgb(23, 23, 23))' }}
    >
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="grid gap-4">
        {/* Project Image */}
        <figure>
          <img 
            src={imgSrc} 
            alt={title}
            loading="lazy"
            className="w-full rounded-md"
          />
        </figure>

        {/* Content */}
        <div className="grid gap-2">
          <header>
            <h5 className="font-display uppercase text-2xl leading-[1.1]">
              {title}
            </h5>
          </header>
          <p className="text-sm leading-snug">
            {desc}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, key) => (
                <span 
                  key={key}
                  className="px-3 py-1 bg-emerald-400/20 border border-emerald-600 rounded-full text-xs font-bold uppercase tracking-wide"
                  style={{ color: 'var(--brand-charcoal)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </article>
  )
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.array,
  projectLink: PropTypes.string,
  cardColor: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default ProjectCard
