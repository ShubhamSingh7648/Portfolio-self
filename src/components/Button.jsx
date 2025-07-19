import React from 'react'
import PropTypes from 'prop-types'

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  return (
    <a 
      href={href || '#'}
      target={target}
      className={`px-6 py-3 bg-zinc-50 text-zinc-900 rounded-xl font-medium flex items-center gap-2 ${classes || ''}`}
    >
      {label}
      {icon && <span className="material-symbols-rounded">{icon}</span>}
    </a>
  )
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}



export default ButtonPrimary