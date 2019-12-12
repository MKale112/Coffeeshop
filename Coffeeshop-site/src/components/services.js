import React from "react"
import Container from "../components/container"
import crew from "../images/SVGs/meet-the-crew-logo.svg"
import bag from "../images/SVGs/coffee-bag.svg"
import blog from "../images/SVGs/blog-logo.svg"

const Services = ({ props }) => {
  return (
    <Container className="services-grid">
      <Container></Container>
      <Container className="services-block">
        <Container className="service-container">
          <img
            src={crew}
            alt="meet-the-crew-logo"
            style={{ width: "50px", height: "50px", color: "#ffffff" }}
          />
          <h3>MEET THE CREW</h3>
          <p>The dedicated people who made all this possible</p>
        </Container>
        <Container className="service-container above-item">
          <img
            src={bag}
            alt="coffee-bag"
            style={{ width: "50px", height: "50px", color: "#ffffff" }}
          />
          <h3>BUY OUR BEANS</h3>
          <p>Buy your beans straight from the roasters- No man in the middle</p>
        </Container>
        <Container className="service-container">
          <img
            src={blog}
            alt="bloglogo"
            style={{ width: "50px", height: "50px", color: "#000000" }}
          />
          <h3>TALK COFFEE</h3>
          <p>Discuss your  favourite roasts and blends right here!</p>
        </Container>
      </Container>
      <Container></Container>
    </Container>
  )
}

export default Services
