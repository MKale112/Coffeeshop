/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const footerStyles = {
  backgroundColor: "#363636",
  padding: "15px",
  margin: "0px",
  display: "flex",
  width: "100%",
  listStyleType: "none",
  justifyContent: "space-around",
}

const Footer = ({ footerItems }) => {
  return (
    <ul style={footerStyles}>
      {footerItems.map(footerItems => (
        <li
          sx={{
            m: 0,
            fontFamily: "wacky",
            color: "primaryWhite",
            fontSize: [18, 20, 22],
          }}
        >
          <Link to={footerItems.link}> {footerItems.text} </Link>
        </li>
      ))}
    </ul>
  )
}

export default Footer
