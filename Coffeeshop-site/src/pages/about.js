/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"

const Members = ({ data }) => {
  const { memberImages, memberInfo } = data

  return <div></div>
}

const About = ({ data }) => {
  const { heroImage } = data
  return (
    <Layout>
      <Img fluid={heroImage.sharp.fluid} />
      <div sx={{}}>
        <div>
          <h3
            sx={{
              fontFamily: "wacky",
              fontWeight: "heading",
              fontSize: [20, 32, 42],
            }}
          >
            PERFECT COFFEE MOMENTS and WELCOMING ATMOSPHERE
          </h3>
          <p>
            The birth of the Coffeeshop Company can be traced back to 1999 when
            the first Coffeeshop opened its doors to its guests on a historical
            September day in Vienna.{" "}
          </p>
          <p>
            Characterized by a very special and unimitable atmosphere, the
            Coffeeshop Company is a new, unique interpretation of the
            ever-popular traditional Viennese coffee house culuture, which was
            included in the UNESCO list of ,,intangible cultural heritage’’ in
            2011.
          </p>
        </div>
        <div>
          <h3
            sx={{
              fontFamily: "wacky",
              fontWeight: "heading",
              fontSize: [20, 32, 42],
            }}
          >
            THE MEMBERS
          </h3>
          <div></div>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/coffeehouse2.jpg" }) {
      id
      sharp: childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 600, fit: COVER, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    memberImages: allFile(
      filter: { relativePath: { regex: "images/members//" } }
    ) {
      edges {
        node {
          sharp: childImageSharp {
            fluid(maxHeight: 10, maxWidth: 10, cropFocus: CENTER, fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    memberInfo: site {
      siteMetadata {
        members {
          email
          name
        }
      }
    }
  }
`
