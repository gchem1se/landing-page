import * as React from "react"
import PropTypes from 'prop-types'
import * as Icons from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Bullet.scss"

const Bullet = ({ icon, title, text, iconClassName }) => {
  return (
    <div className="bulletElement">
      <FontAwesomeIcon icon={icon} className={"bullet-icon " + (iconClassName || '')}/>
      <div className={"bulletTitle "}>
        <h3>{title}</h3>
      </div>
      <h4 className="bullet-content">{text}</h4>
    </div>
  )
}


Bullet.defaultProps = {
  icon: null,
  title: "",
  text: "",
  iconClassName: ""
}

Bullet.propTypes = {
  icon: FontAwesomeIcon,
  title: PropTypes.string,
  text: PropTypes.string,
  iconClassName: PropTypes.string
}

export default Bullet
