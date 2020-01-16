import React from "react"
import Product from "./Product"

const ShopGrid = ({ products }) => {
  console.log(products)
  const itemList = products.map((product, i) => {
    return (
      <Product
        imgPath={products[i].imgPath}
        productName={products[i].productName}
        itemDescription={products[i].itemDescription}
        price={products[i].price}
      />
    )
  })
  return <div>{itemList}</div>
}

export default ShopGrid
