import React from "react"
// import Img from "gatsby"
import mockupImage from "../images/product image/mockup1.jpg"
import styles from "./Product.module.css"

const Product = ({ imgPath, productName, itemDescription, price }) => {
  return (
    <div
      className={styles.card}
      // style={{
      //   width: "250px",
      //   display: "flex",
      //   flexDirection: "column",
      //   padding: "10px",
      //   border: "1px solid #363636",
      // }}
    >
      <div className={styles.imageNprice}>
        <img src={mockupImage} alt="coffee bag" className={styles.image} />
        <div className={styles.dot}>
          <h2 className={styles.price}>{price}</h2>
        </div>
      </div>
      <h2> {productName} </h2>
      <p> {itemDescription} </p>
    </div>
  )
}

export default Product
