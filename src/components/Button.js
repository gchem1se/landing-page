import * as React from "react"
import PropTypes from 'prop-types'
import "./Button.scss"

const Button = ({ text, onClick, onHover }) => {
  return <><button className="btn" onClick={onClick} onHover={onHover}>{text}</button></>
}

Button.defaultProps = {
  text: "",
  onClick: null,
  onHover: null
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  onHover: PropTypes.func
}


export default Button
