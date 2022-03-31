import * as React from "react";
import { Link } from 'gatsby';
import "./Navbar.scss";
import Header from "./header";

const links = [
    {
        id: 0,
        text: "Contact Us",
        href: "#contact-us"
    },
    {
        id: 1,
        text: "Newsletter",
        href: "#newsletter"
    },
]

const Navbar = ({ props }) => {
    return (
        <div className="header-container">
            <Header />
            <nav className="navbar">
            {
                links.map((l) => (
                    <Link className = "navbar-link" key={l.id} href={l.href}>{l.text}</Link>
                ))
            }
            </nav>
        </div>
    );
}

export default Navbar;