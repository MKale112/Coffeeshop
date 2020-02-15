/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"

const Login = () => (
  <div
    sx={{
      bg: "primaryWhite",
      borderRadius: "10px",
      m: 50,
      boxShadow: "0px 7px 7px ",
    }}
  >
    <form
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 30,
        maxWidth: "400px",
      }}
    >
      <h2>LOGIN TO AN EXISTING ACCOUNT </h2>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "200px",
        }}
      >
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="button" value="LOGIN" sx={{ alignSelf: "flex-end" }} />
      </div>
    </form>
  </div>
)

const Register = () => (
  <div
    sx={{
      bg: "primaryWhite",
      borderRadius: "10px",
      m: 50,
      boxShadow: "0px 7px 7px ",
    }}
  >
    <form
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 30,
        maxWidth: "400px",
        height: "400px",
      }}
    >
      <h2>DON'T HAVE AN ACCOUNT? MAKE ONE! </h2>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "200px",
        }}
      >
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat the password once more" />
      </div>
      <div sx={{ display: "flex", flexDirection: "row" }}>
        <h4>Date of Birth: </h4>
        <input type="date" />
      </div>
      <div sx={{ display: "flex", flexDirection: "row" }}>
        <h4>Gender: </h4>
        <input type="radio" id="male" name="gender" value="male" />
        <input type="radio" id="female" name="gender" value="female" />
        <input type="radio" id="other" name="gender" value="other" />
      </div>
      <input type="button" value="SIGN UP" />
    </form>
  </div>
)

const LoginAndRegistration = props => {
  const { heroImage } = props.data
  return (
    <Layout>
      <BackgroundImage
        fluid={heroImage.sharp.fluid}
        sx={{
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Login />
        <Register />
      </BackgroundImage>
    </Layout>
  )
}

export default LoginAndRegistration

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/brick-wall.jpg" }) {
      id
      sharp: childImageSharp {
        fluid(maxHeight: 1050, maxWidth: 1920, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
