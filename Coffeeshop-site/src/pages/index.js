import React from "react"                             // uključivanje libraryja
import {Link} from "gatsby"
import Layout from "/Users/admin/Documents/GitHub/Coffeeshop/Coffeeshop/Coffeeshop-site/src/pages/components/layout.js"

const IndexPage = () => (
<div>
  <Layout>              
  <h1> TheBrewCrew </h1>
  <h2> Page index: </h2>

  <h2><Link to="/authorization/login-registration"> Sign In/Sign Up </Link></h2>
  </Layout>
</div>
)

export default IndexPage                              

                                                      // po modulu (u Javascriptu) možemo imat jedan default po modulu, kad 
                                                      // svi ostali exporti moraju imat {} zagrade kad se importaju

                                                      // IndexPage je varijabla (React komponenta) i njena ARROW funkcija
                                                      // "<div>" nije HTML tag nego JSX - za svaki HTML tag postoji odgovarajući JSX tag, rade fun pozive, i zato importamo React library gori
                                                      // JSX se pretvara u kod
                                                      
                                                      // "this" u ARROW funkcijama je ??? 