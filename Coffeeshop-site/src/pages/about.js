/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import styles from "../components/about.module.css"

const Member = ({ profileImage, emailName }) => {
  console.log(emailName[0])
  return (
    <div className={styles.memberCard}>
      <Img
        fluid={profileImage.node.sharp.fluid}
        className={styles.profilePic}
      />
      <div className={styles.info}>
        <h5 sx={{ m: 0, fontSize: [12, 14, 18] }}>{emailName.name}</h5>
        <p sx={{ fontSize: [10, 14, 16] }}>{emailName.email}</p>
      </div>
    </div>
  )
}

const Members = ({ info, images }) => {
  console.log(info)
  console.log(images)
  const membersArray = images.map((image, i) => {
    // return { image: image, info: info[i] }
    return <Member profileImage={image} emailName={info[i]} />
  })

  return <div className={styles.memberContainer}>{membersArray}</div>
}

const About = ({ data }) => {
  const { heroImage, memberImages, memberInfo } = data
  console.log(memberImages.edges)
  console.log(memberInfo.siteMetadata.members)
  return (
    <Layout>
      <Img fluid={heroImage.sharp.fluid} />
      <div className={styles.aboutContainer}>
        <div className={styles.section}>
          <h3
            sx={{
              fontFamily: "wacky",
              fontWeight: "heading",
              fontSize: [20, 32, 42],
            }}
          >
            PERFECT COFFEE MOMENTS and WELCOMING ATMOSPHERE
          </h3>
          <p
            sx={{
              fontSize: [12, 14, 18],
            }}
          >
            The birth of the Coffeeshop Company can be traced back to 1999 when
            the first Coffeeshop opened its doors to its guests on a historical
            September day in Vienna.{" "}
          </p>
          <p
            sx={{
              fontSize: [12, 14, 18],
            }}
          >
            Characterized by a very special and unimitable atmosphere, the
            Coffeeshop Company is a new, unique interpretation of the
            ever-popular traditional Viennese coffee house culuture, which was
            included in the UNESCO list of ,,intangible cultural heritage’’ in
            2011.
          </p>
        </div>
        <div className={styles.section}>
          <h3
            sx={{
              fontFamily: "wacky",
              fontWeight: "heading",
              fontSize: [20, 32, 42],
            }}
          >
            THE MEMBERS
          </h3>
          <Members
            info={memberInfo.siteMetadata.members}
            images={memberImages.edges}
          />
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
            fluid(
              maxHeight: 400
              maxWidth: 300
              cropFocus: CENTER
              fit: COVER
            ) {
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
