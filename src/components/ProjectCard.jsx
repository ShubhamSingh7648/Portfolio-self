import React from 'react'
import PropTypes from 'prop-types';

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
   <div className={`relative p-6  rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}>
    <figure className="img-box aspect-square rounded-xl mb-6 overflow-hidden">
        <img 
            src={imgSrc}
            className="w-full h-full object-cover rounded-xl"
            alt={title} 
        />
    </figure>
    <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
            <h3 className="title-1 text-xl font-medium mb-3 truncate">
                {title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
                {tags.map((label, key) => (
                    <span 
                        key={key}
                        className='px-3 py-1.5 text-sm text-zinc-400 bg-zinc-50/5 rounded-lg whitespace-nowrap'
                    >
                        {label}
                    </span>
                ))}
            </div>
        </div>
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 mt-1">
            <span className="material-symbols-rounded" aria-hidden="true">
                arrow_outward
            </span>
        </div>
    </div>
    <a 
        className="absolute inset-0 z-10" 
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
    ></a>
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