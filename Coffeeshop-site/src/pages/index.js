import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  console.log(data)
  const { heroImage } = data
  return (
    <>
      <Layout>
        <Img fluid={heroImage.sharp.fluid} />
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
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
