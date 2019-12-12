/** @jsx jsx */
import { jsx } from "theme-ui"
// ovo koristit odsad pa nadalje, stavi ga u sve šta ima styleove
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import "../components/layout.css"
import Container from "../components/container"

const SiteContainer = props => (
  <div {...props} style={{ display: "flex", flexDirection: "column" }} />
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
        {/* <Container>{children}</Container> */}
        <div>{children}</div>
        <Footer footerItems={footerItems} />
      </SiteContainer>
    </>
  )
}

export default Layout
