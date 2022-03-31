/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      >
      <main>{children}</main>  
      <Footer 
        sections={[
        {
          title: "Company",
          links: [
            {
              text: "About us",
              href: "#"
            },
            {
              text: "Careers",
              href: "#"
            },
            {
              text: "Press",
              href: "#"
            },
          ]
        },
        {
          title: "Learn",
          links:[
            {
              text: "Contact Us",
              href: "#"
            }
          ]
        }
      ]}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
