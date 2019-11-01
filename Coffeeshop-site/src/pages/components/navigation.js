import React from "react"                             // uključivanje libraryja
import { Link } from "gatsby"

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

const Navigation = ({link, text }) => {         
    return(
        <ul>
            {
            menuItems.map( ({link, text}) => {
            <li>
                <Link to={ link }>{ text }</Link>
            </li>
            })
            }
        </ul>
    )
}

export default Navigation