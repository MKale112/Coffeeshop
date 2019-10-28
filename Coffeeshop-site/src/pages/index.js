import React from "react"                             // uključivanje libraryja
import { Link } from "gatsby"

const IndexPage = () => 
<div>                         
  <h1> TheBrewCrew </h1>

  <h2> Our Services: </h2>
  <ul>
    <li>
      <Link to="/shop/shop"> Shop </Link>
    </li>
    <li>
      <Link to="/blog/blog-page"> Blog </Link>
    </li>
  </ul>

  <h2><Link to="/authorization/login-registration"> Sign In/Sign Up </Link></h2>
</div>

export default IndexPage                              // po modulu (u Javascriptu) možemo imat jedan default po modulu, kad 
                                                      // svi ostali exporti moraju imat {} zagrade kad se importaju

                                                      // IndexPage je varijabla (React komponenta) i njena ARROW funkcija
                                                      // "<div>" nije HTML tag nego JSX smth - za svaki HTML tag postoji odgovarajući JSX tag, rade fun pozive, i zato importamo React library gori
                                                      // JSX se pretvara u kod
                                                      
                                                      // "this" u ARROW funkcijama je ??? 