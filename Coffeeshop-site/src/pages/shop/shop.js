import React from "react"
import {Link} from "gatsby"

const Shop = () => 
<div>
    <h1>Welcome to TheBrewCrew shop</h1>
    
    <h2><Link to="/">Home</Link></h2>
    <h2><Link to="/shop/cart">Cart</Link></h2>
    <h2><Link to="/shop/checkout">Proceed to checkout</Link></h2>
</div>

export default Shop