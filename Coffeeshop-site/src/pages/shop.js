import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Container from "../components/container"
import Shopgrid from "../components/shopgrid"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Searchbox from "../components/searchbox"
import Filterbox from "../components/filterbox"
import SEO from "../components/seo"

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterChoice: "All",
      searchPhrase: "",
      products: [],
    }
  }

  componentDidMount() {
    this.setState({ products: this.props.data.site.siteMetadata.productItems })
  }

  onSearchChange = event => {
    this.setState({ searchPhrase: event.target.value })
  }

  onFilterChange = event => {
    this.setState({ filterChoice: event.target.value })
  }

  render() {
    const { products, searchPhrase, filterChoice } = this.state
    const { heroImage } = this.props.data

    const filteredProducts = products.filter(product => {
      if (
        product.productName
          .toLowerCase()
          .includes(searchPhrase.toLowerCase()) &&
        product.category.toLowerCase().includes(filterChoice.toLowerCase())
      )
        return product
      else if (
        product.productName
          .toLowerCase()
          .includes(searchPhrase.toLowerCase()) &&
        filterChoice.toLowerCase() === "all"
      )
        return product
      return null
    })

    return (
      <>
        <Layout>
          <SEO title={"Shop"} description={"The Brew Crew Shop"} />

          <Container>
            <Img fluid={heroImage.sharp.fluid} />
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "130px 0px 20px 0px",
              }}
            >
              <div
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2
                  sx={{
                    fontFamily: "wacky",
                    fontWeight: "heading",
                    px: 1,
                    m: 0,
                    fontSize: [16, 24, 36],
                  }}
                >
                  Search directly:
                </h2>
                <Searchbox searchChange={this.onSearchChange} />
              </div>
              <div
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2
                  sx={{
                    fontFamily: "wacky",
                    fontWeight: "heading",
                    px: 1,
                    m: 0,
                    fontSize: [16, 24, 36],
                  }}
                >
                  Filter by category:
                </h2>
                <Filterbox filterChange={this.onFilterChange} />
              </div>
            </Container>
            <Shopgrid products={filteredProducts} />
          </Container>
        </Layout>
      </>
    )
  }
}

export default Shop

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/beans.jpg" }) {
      id
      sharp: childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 700, fit: COVER, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        productItems {
          imgPath
          itemDescription
          price
          productName
          category
        }
      }
    }
  }
`
