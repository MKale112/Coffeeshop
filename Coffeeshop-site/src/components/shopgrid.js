import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Product from "./product"
import styles from "./shopgrid.module.css"

const Shopgrid = ({ products }) => {
  let itemList = []
  if (products.length === 0) {
    console.log("no products")
    return (
      <div className={styles.errorCard}>
        <h3 sx={{ fontSize: [24, 32, 48] }}>
          Sorry, your search doesn' match any of our products.
        </h3>
      </div>
    )
  } else
    itemList = products.map((product, i) => {
      return (
        <Product
          key={products[i].productName}
          imgPath={products[i].imgPath}
          productName={products[i].productName}
          itemDescription={products[i].itemDescription}
          price={products[i].price}
        />
      )
    })
  return <div className={styles.cardContainer}>{itemList}</div>
}

export default Shopgrid
