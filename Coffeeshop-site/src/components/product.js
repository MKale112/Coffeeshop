import React from "react"
import Container from "./container"
import Img from "gatsby"

const Product = ({
  imagePath = "src/images/product image/product-mockup.jpg",
  roastName = "Roast X",
  description = "a coffee",
  price = "9,99",
}) => {
  return (
    <Container>
      <Img fluid={imagePath} />
      <Container>
        <h3>{roastName}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <Container>
          {/* <PrimaryButton />
          <PrimaryButton /> */}
          <button type="button" value="Add to Cart"></button>
          <button type="button" value="Buy"></button>
        </Container>
      </Container>
    </Container>
  )
}

export default Product
