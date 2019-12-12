import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/container"
import Services from "../components/services"
import { Link } from "gatsby"

const IndexPage = ({ data }) => {
  const { heroImage } = data
  return (
    <>
      <Layout>
        <Img // here there'll be a carousel
          fluid={heroImage.sharp.fluid}
          style={{ height: "75vh", width: "100%" }}
        />
        <Services />
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/barista.jpg" }) {
      id
      sharp: childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
