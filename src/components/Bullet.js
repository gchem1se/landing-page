import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import "./Button.scss"

const Bullet = ({ title, text, icon }) => {
  return (
    <div className="bulletElement">
      <StaticImage src={icon} />
      <h3>{title}</h3>
      <h4>{text}</h4>
    </div>
  )
}

export default Bullet
