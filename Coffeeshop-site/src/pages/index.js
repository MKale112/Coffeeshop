import React from "react"                             // uključivanje libraryja
import { Link } from "gatsby"

const IndexPage = () => 
<div>                         
  <h1> Teaching </h1>

  <h2> Examples: </h2>
  <ul>
    <li>
      <Link to="/examples/example-1"> Example 1 </Link>
    </li>
    <li>
      <Link to="/examples/example-2"> Example 2 </Link>
    </li>
    <li>
      <Link to="/examples/example-3"> Example 3 </Link>
    </li>
  </ul>

  <h2><Link to="/blog"> Blog </Link></h2>
</div>

export default IndexPage                              // po modulu (u Javascriptu) možemo imat jedan default po moduliu, kad 
                                                      // svi ostali exporti moraju imat {} zagrade kad se importaju

                                                      // IndexPage je varijabla (React komponenta) i njena ARROW funkcija
                                                      // "<div>" nije HTML tag nego JSX smth - za svaki HTML tag postoji odgovarajući JSX tag, rade fun pozive, i zato importamo React library gori
                                                      // JSX se pretvara u kod
                                                      
                                                      // "this" u ARROW funkcijama je ??? 