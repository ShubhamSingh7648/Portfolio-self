import React from 'react'
import PropTypes from 'prop-types';

const SkillCard = ({
  imgSrc,
  label,
  desc,
  cardColor,
  classes
}) => {
  return (
    <article 
      className={`fireship-card ${cardColor} ${classes}`}
    >
      <div className="grid grid-cols-[1fr_1.5fr] gap-4">
        {/* Image */}
        <figure>
          <img 
            src={imgSrc} 
            alt={label}
            loading="lazy"
            className="w-full rounded-md"
          />
        </figure>

        {/* Content */}
        <div className="grid gap-2 content-start">
          <header>
            <h5 className="font-display uppercase text-2xl leading-[1.1]">
              {label}
            </h5>
          </header>
          <p className="text-sm leading-snug">
            {desc}
          </p>
        </div>
      </div>
    </article>
  )
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  cardColor: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default SkillCard