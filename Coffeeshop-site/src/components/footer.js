import React from "react"
import {Link} from "gatsby"

const footerStyles = {
    backgroundColor: "#363636",
    padding: "10px",
    margin: "0px",
    display: "flex",
    listStyleType: "none",
    justifyContent: "space-around",
}

const Footer = ({footerItems}) => {
    return(
        <ul style = {footerStyles}>
            {footerItems.map((footerItems) => (
                <li style = {{margin: "0"}}>
                    <Link to={footerItems.link}> {footerItems.text} </Link>
                </li>
            ))
            }
        </ul>
    )
}

export default Footer