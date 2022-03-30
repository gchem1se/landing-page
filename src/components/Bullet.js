import * as React from "react"
import { faTree } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Bullet.scss"

const Bullet = ({ props }) => {
  return (
    <div className="bulletElement">
      <div className="bulletTitle">
        <FontAwesomeIcon icon={props.icon} color="rgba(0, 255, 41, 0.8)" />
        <h3>{props.title}</h3>
      </div>
      <h4>{props.text}</h4>
    </div>
  )
}

export default Bullet
