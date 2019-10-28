import React from "react"
import {Link} from "gatsby"

const BlogPage = () => 
<div>
    <h1>This is the official Blog page</h1>

    <h2><Link to="/">Home</Link></h2>

    <h2><Link to="/blog/blog-post">Blog post 1</Link></h2>

</div>

export default BlogPage