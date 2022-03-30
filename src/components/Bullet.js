import * as React from "react"
import { faTree } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Bullet.scss"

const Bullet = ({ props }) => {
  return (
    <div className="bulletElement">
      <FontAwesomeIcon icon={props.icon} color={{background:"-webkit-linear-gradient(#9c47fc, #356ad2)"}} className={"bullet-icon " + (props.iconClassName || '')}/>
      <div className={"bulletTitle "}>
        <h3>{props.title}</h3>
      </div>
      <h4 className="bullet-content">{props.text}</h4>
    </div>
  )
}

export default Bullet
