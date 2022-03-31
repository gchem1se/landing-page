import React from "react"
import PropTypes from 'prop-types'
import "./Input.scss"

const Input = ({ className, placeholder, type, name, textarea }) => {
  return (!textarea ? 
        <input name={name} placeholder={placeholder} type={type} className={"input " + className}/> : 
        <textarea name={name} placeholder={placeholder} className={"input area " + className} maxLength={200}/>)
}

Input.defaultProps = {
  className: "",
  placeholder: "",
  type: "text",
  name: "",
  textarea: false
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  textarea: PropTypes.bool
}

export default Input
