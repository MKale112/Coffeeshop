import React from "react"

import Navigation from "../components/navigation"
import "../components/layout.css"

const menuItems = [
    {
      text: "Shop",
      link: "/shop/shop",
    },
    {
      text: "Blog",
      link: "/blog/blog-page",
    },
]

// const myStyles = {
//     backgroundColor: "#f0f0f0",
// }

const Layout = props => {
    return (
        <div className = "layout">
            <Navigation menuItems = { menuItems }/>
            {props.children}
        </div>
    )
}

export default Layout 