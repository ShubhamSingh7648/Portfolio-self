import React from 'react'
import PropTypes from 'prop-types';

const SkillCard = ({
  imgSrc,
  label,
  desc,
  borderColor,
  bgColor,
  classes
}) => {
  return (
    <div className={`group flex overflow-hidden bg-black border-[6px] ${borderColor} rounded-xl h-[170px] transition-all duration-300 hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${classes}`}>
      
      {/* Icon Container */}
      <div className="w-[150px] flex-shrink-0 bg-zinc-950 p-4 flex items-center justify-center">
        <div className="w-[100px] h-[100px] bg-zinc-900 rounded-xl flex items-center justify-center">
          <img 
            src={imgSrc} 
            alt={label}
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`${bgColor} flex-1 px-6 py-5 flex flex-col justify-start`}>
        <h3 
          className="text-2xl text-black mb-2 uppercase leading-tight"
          style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif", letterSpacing: '0.05em' }}
        >
          {label}
        </h3>
        <p className="text-sm text-black/90 font-medium leading-snug line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  )
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default SkillCard
