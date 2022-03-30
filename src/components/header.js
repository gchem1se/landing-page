import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import './header.scss';

const Header = ({ siteTitle }) => (
  <header
    className="header"
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="#"
      >
    {
      siteTitle === Header.defaultProps.siteTitle ? siteTitle.components.map(c => {
        return <span className={c.className}>{c.text}</span>
      }) : siteTitle
    }
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: {
    components: [
      { text: 'Green', className: 'text-green' },
      { text: 'print', className: '' }
    ]
  },
}

export default Header
