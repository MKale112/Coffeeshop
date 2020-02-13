/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import logo from "../images/vectors/mill.svg"
import Container from "../components/container"
import styles from "./Navigation.module.css"

const Logo = () => (
  <Link to="../">
    <div
      sx={{
        px: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        style={{ width: "50px", height: "50px" }}
        alt="company logo"
      />
      <h2
        sx={{
          m: 0,
          alignSelf: "baseline",
          fontFamily: "wacky",
          fontWeight: "heading",
          fontSize: 50,
          color: "primaryWhite",
          px: 2,
        }}
      >
        THEBREWCREW
      </h2>
    </div>
  </Link>
)

const Nav = ({ menuItems }) => {
  return (
    <ul className={styles.navList}>
      {menuItems.map(({ text, link }) => (
        <Link to={link}>
          <li
            className={styles.navLinks}
            sx={{ fontFamily: "wacky", fontSize: 42, fontWeight: "heading" }}
          >
            {text}
          </li>
        </Link>
      ))}
    </ul>
  )
}

const Navigation = ({ menuItems }) => {
  return (
    <Container
      className={styles.gradientEffect}
      style={{
        padding: "0px",
        top: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "fixed",
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
