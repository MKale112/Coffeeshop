import React from "react"
import { Link } from "gatsby"

const navList = {
    // position: "fixed",
    margin: "0px",
    padding: "",
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
}

const navlinks = {
    color: "#ffffff",
}

const Navigation = ({menuItems}) => {         
    return(
        <ul style = {navList}>
            {menuItems.map(({link, text}) => (
            <li>
                <Link style={navlinks} to={link}> {text} </Link>
            </li>
            ))}
        </ul>
    )
}

export default Navigation