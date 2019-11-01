import React, { Children } from "react"
import Navigation from "/Users/admin/Documents/GitHub/Coffeeshop/Coffeeshop/Coffeeshop-site/src/pages/components/navigation"
import "/Users/admin/Documents/GitHub/Coffeeshop/Coffeeshop/Coffeeshop-site/src/pages/components/layout.css"

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

const Layout = ({ children }) => {
    return (
        <div className = "layout">
            <Navigation menuItems={ menuItems }/>
            {children}
        </div>
    )
}

export default Layout 