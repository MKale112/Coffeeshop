import React from "react"                             // uključivanje libraryja
import { Link } from "gatsby"

const Navigation = ({menuItems }) => {         
    return(
        <ul>
            {menuItems.map(({link, text}) => (
            <li>
                <Link to={ link }>{ text }</Link>
            </li>
            ))}
        </ul>
    )
}

export default Navigation