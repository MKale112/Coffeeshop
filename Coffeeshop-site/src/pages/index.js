import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Services from "../components/services"
import SEO from "../components/seo"
import styles from "../components/landing.module.css"
import Carousel from "react-bootstrap/Carousel"

const IndexPage = ({ data }) => {
  const { heroImages } = data
  return (
    <>
      <Layout>
        <SEO title={"The Brew Crew"} description={"Landing page"} />

        <Carousel>
          <Carousel.Item>
            <Img
              style={{ height: "80vh", width: "100%" }}
              className="d-block w-100"
              fluid={heroImages.edges[0].node.sharp.fluid}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className={styles.carouselContainer}>
                <h3
                  sx={{
                    fontSize: [24, 36, 64],
                    fontWeight: "heading",
                  }}
                >
                  GROUND LOCALLY
                </h3>
                <a
                  sx={{ fontSize: [16, 20, 24], fontWeight: "body" }}
                  className={styles.callToAction}
                  href="../blog"
                >
                  VISIT OUR SHOP
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Img
              style={{ height: "80vh", width: "100%" }}
              className="d-block w-100"
              fluid={heroImages.edges[1].node.sharp.fluid}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className={styles.carouselContainer}>
                <h3 sx={{ fontSize: [24, 36, 64], fontWeight: "heading" }}>
                  TALK COFFEE WITH US
                </h3>
                <a
                  sx={{ fontSize: [16, 20, 24], fontWeight: "body" }}
                  className={styles.callToAction}
                  href="../shop"
                >
                  VISIT THE SHOP
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Img
              style={{ height: "80vh", width: "100%" }}
              className="d-block w-100"
              fluid={heroImages.edges[2].node.sharp.fluid}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className={styles.carouselContainer}>
                <h3 sx={{ fontSize: [24, 36, 64], fontWeight: "heading" }}>
                  HAVE A CUP
                </h3>
                <a
                  sx={{ fontSize: [16, 20, 24], fontWeight: "body" }}
                  className={styles.callToAction}
                  href="../blog"
                >
                  VISIT OUR BLOG
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Services />
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    heroImages: allFile(
      filter: { relativePath: { regex: "content/images/landingPage//" } }
    ) {
      edges {
        node {
          sharp: childImageSharp {
            fluid(
              maxWidth: 1920
              maxHeight: 1800
              fit: COVER
              cropFocus: NORTH
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
