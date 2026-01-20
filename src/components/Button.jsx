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
      href={href}
      target={target}
      className={`inline-flex items-center gap-3 ${classes}`}
    >
      {label}
      {icon && <span aria-hidden="true">{icon}</span>}
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
