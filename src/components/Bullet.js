import * as React from "react"
import PropTypes from 'prop-types'
import * as Icons from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Bullet.scss"

const Bullet = ({ icon, title, sections, iconClassName }) => {
  return (
    <div className="bulletElement">
      <FontAwesomeIcon icon={icon} className={"bullet-icon " + (iconClassName || '')}/>
      <div className={"bulletTitle "}>
        <h3>{title}</h3>
      </div>
      <h4 className="bullet-content">
        {
          sections.map((s) => s)
        }
      </h4>
    </div>
  )
}


Bullet.defaultProps = {
  icon: null,
  title: "",
  sections: [],
  iconClassName: ""
}

Bullet.propTypes = {
  icon: FontAwesomeIcon,
  title: PropTypes.string,
  sections: PropTypes.array,
  iconClassName: PropTypes.string
}

export default Bullet
