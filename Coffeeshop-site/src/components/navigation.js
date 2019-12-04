import React from "react"
import { Link } from "gatsby"
import logo from "../images/vectors/coffee-grinder.svg"
import Container from "../components/container"

const navList = {
  padding: "0px",
  margin: "0px",
  listStyleType: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
}

const navLinks = {
  padding: "20px 20px 20px 20px",

  // color: "#ffffff",
}

const Logo = () => (
  <Link to="../src/pages/index.js" style={{ display: "flex" }}>
    <img
      src={logo}
      style={{ width: "50px", height: "50px" }}
      alt="company logo"
    />
    <h2>THEBREWCREW</h2>
  </Link>
)

// const NavLink = ({ ...props }) => <Link {...props} />      ŠTA OVO ZNAČI KAD SU UNUTAR <Link> DIJELA SVI PROPS

const Nav = ({ menuItems }) => {
  return (
    <ul style={navList}>
      {menuItems.map(({ text, link }) => (
        <Link to={link} style={navLinks}>
          <li>{text}</li>
        </Link>
      ))}
    </ul>
  )
}

const Navigation = ({ menuItems }) => {
  return (
    <Container style={{ display: "flex" }}>
      <Logo />
      <Nav menuItems={menuItems} />
    </Container>
  )
}

export default Navigation
