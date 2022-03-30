import React from "react"
import PropTypes from 'prop-types'
import "./Input.scss"

const Input = ({ className, placeholder, type }) => {
  return (
    <input placeholder = {placeholder} type={type} className={"input-" + className}/>
  )
}

Input.defaultProps = {
  className: "",
  placeholder: "",
  type: "text",
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default Input
