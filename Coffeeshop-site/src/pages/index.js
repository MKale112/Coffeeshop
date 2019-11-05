import React from "react"                             // uključivanje libraryja
import Layout from "../pages/components/layout"

const IndexPage = () => (
  <Layout>
      <h1>Welcome to the Crew!</h1>
  </Layout>
)

export default IndexPage                              

                                                      // po modulu (u Javascriptu) možemo imat jedan default po modulu, kad 
                                                      // svi ostali exporti moraju imat {} zagrade kad se importaju

                                                      // IndexPage je varijabla (React komponenta) i njena ARROW funkcija
                                                      // "<div>" nije HTML tag nego JSX - za svaki HTML tag postoji odgovarajući JSX tag, rade fun pozive, i zato importamo React library gori
                                                      // JSX se pretvara u kod
                                                      
                                                      // "this" u ARROW funkcijama 