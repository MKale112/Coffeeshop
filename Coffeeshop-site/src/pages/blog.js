import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"

const BlogPost = () => {}

const Blog = props => {
  const { heroImage } = props.data
  console.log(heroImage)
  return (
    <Layout>
      <Img fluid={heroImage.sharp.fluid} />
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
          maxHeight: 700
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
