import React from "react"
import Product from "./Product"
import styles from "./ShopGrid.module.css"

const ShopGrid = ({ products }) => {
  const itemList = products.map((product, i) => {
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

export default ShopGrid
