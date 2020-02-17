import "bootstrap/dist/css/bootstrap.min.css"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import styles from "../components/login.module.css"
import SEO from "../components/seo"

const Login = () => (
  <div className={styles.formBox}>
    <form
      className={styles.formBlock}
      sx={{
        p: 30,
        maxWidth: "400px",
      }}
    >
      <h2 sx={{ fontSize: [20, 24, 28] }}>LOGIN TO AN EXISTING ACCOUNT </h2>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "200px",
          maxHeight: "500px",
        }}
      >
        <input sx={{ fontSize: 12 }} type="text" placeholder="Username" />
        <input sx={{ fontSize: 12 }} type="text" placeholder="Email" />
        <input sx={{ fontSize: 12 }} type="password" placeholder="Password" />
      </div>
      <a href="../" className={styles.linkBtn}>
        <input className={styles.lrButton} type="button" value="LOGIN" />
      </a>
    </form>
  </div>
)

const Register = () => (
  <div className={styles.formBox}>
    <form
      className={styles.formBlock}
      sx={{
        p: 30,
        maxWidth: "400px",
      }}
    >
      <h2 sx={{ fontSize: [20, 24, 28] }}>DON'T HAVE AN ACCOUNT? MAKE ONE! </h2>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "200px",
        }}
      >
        <input sx={{ fontSize: 12 }} type="text" placeholder="Username" />
        <input sx={{ fontSize: 12 }} type="text" placeholder="Email" />
        <input sx={{ fontSize: 12 }} type="password" placeholder="Password" />
        <input
          sx={{ fontSize: 12 }}
          type="password"
          placeholder="Repeat the password"
        />
      </div>
      <div className={styles.dataInputHorizontal}>
        <h4 sx={{ fontSize: [10, 12, 14] }}>Date of Birth: </h4>
        <input className={styles.inputDate} type="date" />
      </div>
      <div className={styles.dataInputHorizontal}>
        <h4 sx={{ fontSize: [10, 12, 14] }}>Gender: </h4>
        <input
          className={styles.inputRadio}
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked="checked"
        />
        Male
        <input
          className={styles.inputRadio}
          type="radio"
          id="female"
          name="gender"
          value="female"
        />
        Female
        <input
          className={styles.inputRadio}
          type="radio"
          id="other"
          name="gender"
          value="other"
        />
        Other
      </div>
      <a href="../" className={styles.linkBtn}>
        <input className={styles.lrButton} type="button" value="SIGN UP" />
      </a>
    </form>
  </div>
)

const LoginAndRegistration = props => {
  const { heroImage } = props.data
  return (
    <Layout>
      <SEO
        title={"Login and Registration"}
        description={"Login and Registration"}
      />

      <BackgroundImage
        fluid={heroImage.sharp.fluid}
        className={styles.formContainer}
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
