import React from "react"
import { Link } from "gatsby"
import logo from "../images/vectors/coffee-grinder.svg"
import Container from "../components/container"

const navList = {
  padding: "0px 20px",
  margin: "0px",
  listStyleType: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
}

const navLinks = {
  padding: "20px 60px 20px 0px",
  color: "#ffffff",
}

const Logo = () => (
  <Link
    to="../src/pages/index.js"
    style={{ display: "flex", color: "#ffffff" }}
  >
    <img
      src={logo}
      style={{ width: "50px", height: "50px", color: "#ffffff" }}
      alt="company logo"
    />
    <h2>THEBREWCREW</h2>
  </Link>
)

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
    <Container
      style={{
        top: "0px",
        width: "100%",
        display: "flex",
        position: "fixed",
        padding: "25px 15px",
        opacity: "0.85",
        zIndex: "2",
      }}
    >
      <Logo />
      <Nav menuItems={menuItems} />
    </Container>
  )
}

export default Navigation
