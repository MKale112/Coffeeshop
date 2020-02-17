import "bootstrap/dist/css/bootstrap.min.css"
/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Accordion, Card } from "react-bootstrap"
import styles from "../components/blog.module.css"
import SEO from "../components/seo"

const BlogPost = ({ poster, title, comments }) => {
  const commentArray = comments.map(entry => {
    return (
      <div className={styles.cardStyles}>
        <h6 sx={{ color: "primaryRed", m: 0, fontWeight: "heading" }}>
          {entry.name}
        </h6>
        : {entry.said}
      </div>
    )
  })
  console.log(poster)
  const userLetter = poster.substring(0, 1)
  console.log(userLetter)
  return (
    <div className={styles.profileAndCard}>
      <div
        sx={{
          fontSize: [22, 26, 32],
          width: ["40px", "40px", "50px"],
          height: ["40px", "40px", "50px"],
        }}
        className={styles.dot}
      >
        {userLetter}
      </div>
      <Accordion className={styles.blogpost}>
        <Card className={styles.blogCard}>
          <Accordion.Toggle
            className={styles.cardHeader}
            as={Card.Header}
            eventKey="0"
          >
            {title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{commentArray}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

const Blog = props => {
  const { heroImage } = props.data
  console.log(heroImage)
  return (
    <Layout sx={{ fontSize: [24, 48, 72] }}>
      <SEO title={"Blog"} description={"Discuss with us"} />

      <Img fluid={heroImage.sharp.fluid} />
      <div className={styles.blogContainer}>
        <h3 sx={{ margin: "35px 0px" }}>FEEL FREE TO DISCUSS</h3>
        <BlogPost
          poster={"Julije"}
          title={"Self or commertially ground beans?"}
          comments={[
            { name: "User1", said: "For me, personally, self ground." },
            {
              name: "Anonymus",
              said: "Can't be bothered tbh, so comercially.",
            },
            { name: "User3", said: "Tnx" },
          ]}
        />
        <BlogPost
          poster={"Kelsier"}
          title={"Costa Rica Tarrazu or The Mount Blend?"}
          comments={[
            { name: "User1", said: "Neither." },
            { name: "User2", said: "Okay then." },
          ]}
        />
        <BlogPost
          poster={"Steris"}
          title={"?"}
          comments={[
            { name: "User1", said: "?" },
            { name: "Anonymus", said: "!" },
            { name: "User3", said: "!!!" },
            { name: "User4", said: "Epstein didn't kill himself." },
          ]}
        />
        <BlogPost
          poster={"Vin"}
          title={"How many cups do you drink a day?"}
          comments={[
            { name: "User1", said: "1" },
            { name: "Anonymus", said: "2" },
            { name: "Luce", said: "9" },
            { name: "User4", said: "Wat?!" },
          ]}
        />
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/blog-pic.jpg" }) {
      id
      sharp: childImageSharp {
        fluid(
          maxHeight: 800
          maxWidth: 1920
          fit: COVER
          cropFocus: ATTENTION
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
