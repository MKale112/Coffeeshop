import React, { Component } from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import ShopGrid from "../components/ShopGrid"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import SearchBox from "../components/SearchBox"
import FilterBox from "../components/FilterBox"

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
    console.log(event)
    this.setState({ filterChoice: event.target.value })
  }

  render() {
    const { products, searchPhrase, filterChoice } = this.state
    const { heroImage } = this.props.data

    // const filteredProducts = products.filter(product => {
    //   return product.productName
    //     .toLowerCase()
    //     .includes(searchPhrase.toLowerCase())
    // })

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
        filterChoice.toLowerCase() == "all"
      )
        return product
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
              <FilterBox filterChange={this.onFilterChange} />
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
          category
        }
      }
    }
  }
`
