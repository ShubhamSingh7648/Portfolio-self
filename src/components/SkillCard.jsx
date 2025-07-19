import React from 'react'
import PropTypes from 'prop-types';
// SkillCard.jsx
const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'flex items-center gap-4 ring-1 ring-inset ring-zinc-50/10 rounded-2xl p-4 hover:bg-zinc-800/50 transition-colors group ' + classes}>
        <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors shrink-0">
            <img src={imgSrc}
            className="w-full h-full object-contain"
            alt={label} />
        </figure>
        <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate">{label}</h3>
            <p className='text-zinc-400 text-sm truncate'>
                {desc}
            </p>
        </div>
    </div>
  )
}
SkillCard.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string

}

export default SkillCard
