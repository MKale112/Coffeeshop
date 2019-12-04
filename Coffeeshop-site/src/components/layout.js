import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import "../components/layout.css"
import Container from "../components/container"

const SiteContainer = props => (
  <div {...props} style={{ display: "flex", flexDirection: "column" }} />
)

const footerItems = [
  {
    text: "THEBREWCREW",
    link: "../index",
  },
  {
    text: "Privacy Policy",
    link: "",
  },
  {
    text: "Terms of Use",
    link: "",
  },
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site(siteMetadata: {}) {
        siteMetadata {
          menuItems {
            text
            link
          }
        }
      }
    }
  `)
  const { menuItems } = data.site.siteMetadata

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
