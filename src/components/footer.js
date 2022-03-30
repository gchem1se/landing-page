import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./footer.scss"

const Footer = ({ sections, className, siteTitle }) => (
  <footer className={className}>
    <div className="footer-info">
      <h2 style={{ margin: 0 }}>
        <Link
          to="#"
          className="simple-text"
        >
          {
            siteTitle === Footer.defaultProps.siteTitle ? siteTitle.components.map(c => {
              return <span className={c.className}>{c.text}</span>
            }) : siteTitle
          }
        </Link>
      </h2>
      <div className="simple-text">© 2022 {
        siteTitle === Footer.defaultProps.siteTitle ? siteTitle.components.map(c => c.text).join('') : siteTitle
      }
      </div>
    </div>
    <div className="footer-content">
      {
        sections && (
          sections.map((s) => (
            <div className="footer-section">
              <div className="section-title">{s.title}</div>
              <ul className="section-content">
              {
                s.links.map((l) => (
                  <li className="section-item"><a href={l.href} >{l.text}</a></li>
                ))
              } 
              </ul>
            </div>
          ))
        )
      }
    </div>
  </footer>
)

Footer.propTypes = {
  sections: PropTypes.object.isRequired,
  siteTitle: PropTypes.object,
  className: PropTypes.string
}

Footer.defaultProps = {
  sections: {},
  className: "",
  siteTitle: {
    components: [
      { text: 'Green', className: 'text-green' },
      { text: 'print', className: '' }
    ]
  },
}

export default Footer
