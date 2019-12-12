import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Img from "gatsby-image"

const Shop = ({ data }) => {
  const { heroImage } = data
  return (
    <>
      <Layout>
        <Container>
          <Img fluid={heroImage.sharp.fluid} />
          <Container>
            <div className="container-2">
              <h2>Our Blends</h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3>Filter by:</h3>
                <select id="product-filter">
                  <option value="all"></option>
                  <option value="Coffee-1">Coffee Brand 1</option>
                  <option value="Coffee-2">Coffee Brand 2</option>
                  <option value="Coffee-3">Coffee Brand 3</option>
                </select>
              </div>
            </div>
            <Container></Container>
          </Container>
        </Container>
      </Layout>
    </>
  )
}

export default Shop

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/beans.jpg" }) {
      id
      sharp: childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
