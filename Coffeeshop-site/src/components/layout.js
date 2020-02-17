/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import Footer from "./footer"
import "./layout.css"

const SiteContainer = props => (
  <div
    {...props}
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      margin: "0 auto",
    }}
  />
)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site(siteMetadata: {}) {
        siteMetadata {
          footerItems {
            text
            link
          }
          menuItems {
            text
            link
          }
        }
      }
    }
  `)

  const { menuItems, footerItems } = data.site.siteMetadata

  return (
    <>
      <SiteContainer>
        <Navigation menuItems={menuItems} />
        <div>{children}</div>
        <Footer footerItems={footerItems} />
      </SiteContainer>
    </>
  )
}

export default Layout
