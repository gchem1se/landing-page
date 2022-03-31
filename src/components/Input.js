import React from "react"
import PropTypes from 'prop-types'
import "./Input.scss"

const Input = ({ className, placeholder, type, name }) => {
  return (
    <input name={name} placeholder={placeholder} type={type} className={"input " + className}/>
  )
}

Input.defaultProps = {
  className: "",
  placeholder: "",
  type: "text",
  name: ""
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string
}

export default Input
