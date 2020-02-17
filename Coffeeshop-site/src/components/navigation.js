/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import logo from "../images/vectors/mill.svg"
import Container from "./Container"
import styles from "./Navigation.module.css"
import {
  Navbar,
  //Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

const Logo = () => (
  <Link to="../">
    <div
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        sx={{
          width: ["25px", "40px", "50px"],
          height: ["25px", "40px", "50px"],
        }}
        alt="company logo"
      />
      <h2
        sx={{
          m: 0,
          alignSelf: "center",
          fontFamily: "wacky",
          fontWeight: "heading",
          fontSize: [24, 36, 42],
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
        <Link key={text} to={link}>
          <li
            className={styles.navLinks}
            sx={{
              fontFamily: "wacky",
              fontSize: [24, 36, 42],
              fontWeight: "heading",
            }}
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
    <Navbar
      bg={styles.customColor}
      variant="dark"
      expand="lg"
      style={{
        padding: "0px",
        top: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "fixed",
        opacity: "0.95",
        zIndex: "2",
      }}
      className={styles.customColor}
    >
      <Logo />
      <Navbar.Toggle
        className={styles.hamburgerMenu}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav menuItems={menuItems} />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
