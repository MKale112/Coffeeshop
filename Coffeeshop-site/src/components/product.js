/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
// import Img from "gatsby"
import mockupImage from "../images/product image/mockup1.jpg"
// import mockupImage from "../images/product image/mockup1-copy.jpg"
import styles from "./Product.module.css"

const Product = ({ imgPath, productName, itemDescription, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageNprice}>
        <img src={mockupImage} alt="coffee bag" className={styles.image} />
        <div className={styles.dot}>
          <h3 className={styles.price}>{price}</h3>
        </div>
      </div>
      <div className={styles.description}>
        <h4> {productName} </h4>
        <p sx={{ fontSize: [12, 14, 16] }}> {itemDescription} </p>
      </div>
    </div>
  )
}

export default Product
