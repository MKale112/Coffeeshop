import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import "../components/layout.css"

const menuItems = [
    {
        text: "THEBREWCREW",
        link: "../index",
    },
    {
        text: "THE CREW",
        link: "../page-2",
    },
    {
        text: "SHOP",
        link: "../shop/shop",
    },
    {
        text: "BLOG",
        link: "../blog/blog-page",
    },
    {
        text: "LOGIN/SIGN UP",
        link: "../authorization/login-registration",
    },
]

const footerItems = [
    {
        text: "THEBREWCREW",
        link: "../index",
    },
    {
        text: "Privacy Policy",
        link: "",
    },
    {
        text: "Terms of Use",
        link: "",
    }
]

const Layout = (props) => {             // if you have only one argument to a function, you can erase the "()"... (props) or props
    return (
        <div className = "container">
            <div className = "navbar">
                <Navigation menuItems = {menuItems}/>
            </div>
            <div>
                {props.children}
            </div>
            <div className = "footer">
                <Footer footerItems = {footerItems} />
            </div>
        </div>
    )
}

export default Layout 