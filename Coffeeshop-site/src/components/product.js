import React from "react"
import Container from "./container"
import Img from "gatsby"

const Product = ({ imgPath, productName, itemDescription, price }) => {
  return (
    <>
      <div>
        <img src={imgPath} alt="coffee bag" />
        <div className="dot">
          <h2>{price}</h2>
        </div>
      </div>
      <div className="productInfo">
        <h2> {productName} </h2>
        <h3> {itemDescription} </h3>
      </div>
    </>
  )
}

export default Product
