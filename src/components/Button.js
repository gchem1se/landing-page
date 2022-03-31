import * as React from "react"
import PropTypes from 'prop-types'
import "./Button.scss"

const Button = ({ className, text, onClick, onHover, children }) => {
  return <button className={`btn ${className}`} onClick={onClick} onHover={onHover}>{children || text || ''}</button>
}

Button.defaultProps = {
  text: "",
  onClick: null,
  onHover: null,
  className: ''
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  className: PropTypes.string
}


export default Button
