import React, { Component } from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import ShopGrid from "../components/ShopGrid"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import SearchBox from "../components/SearchBox"

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
    console.log(event.target.value)
    this.setState({ searchPhrase: event.target.value })
  }

  render() {
    const { products, searchPhrase, filterChoice } = this.state
    console.log(products)
    const { heroImage } = this.props.data
    const filteredProducts = products.filter(product => {
      return product.productName
        .toLowerCase()
        .includes(searchPhrase.toLowerCase())
    })

    return (
      <>
        <Layout>
          <Container>
            <Img fluid={heroImage.sharp.fluid} />
            <Container>
              {/*search and filter div */}
              <h2>Our Blends:</h2>
              <SearchBox searchChange={this.onSearchChange} />
              {/* <FilterBox /> */}
            </Container>
            <ShopGrid products={filteredProducts} />
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
        fluid(maxWidth: 1920, maxHeight: 500) {
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
        }
      }
    }
  }
`
