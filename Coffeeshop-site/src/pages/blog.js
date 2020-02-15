/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"

const BlogPost = () => {}

const Blog = props => {
  const { heroImage } = props.data
  console.log(heroImage)
  return (
    <Layout sx={{ fontSize: [24, 48, 72] }}>
      <Img fluid={heroImage.sharp.fluid} />
      <h2>asdasda</h2>
      <h3>asdasda</h3>
      <h4>asdasda</h4>
      <h5>asdasda</h5>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/blog-pic.jpg" }) {
      id
      sharp: childImageSharp {
        fluid(
          maxHeight: 800
          maxWidth: 1920
          fit: COVER
          cropFocus: ATTENTION
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
