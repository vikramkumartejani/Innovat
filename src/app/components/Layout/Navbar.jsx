'use client';

import "@/app/styles/navbar.scss";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkedIn, Logo, Telegram, Twitter2, Youtube } from "../Image";

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);
    const sidebarRef = useRef(null);

    // Close navbar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Navbar
            expand="lg"
            className={` ${expanded ? "navbar-expanded" : ""} navbar-main icontainer`}
            expanded={expanded}
            onToggle={() => setExpanded((prev) => !prev)} // Ensure toggle works
            ref={sidebarRef} // Wrap entire navbar
        >
            <div className="navbar-wrapper-container">
                <Navbar.Brand className="navbar-brand">
                    <Link href="/">
                        <Logo />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </div>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="NavList navbar-nav">
                    <NavLinkComponent handleClose={() => setExpanded(false)} />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const NavLinkComponent = ({ handleClose }) => {
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <>
            <Link href="/about-innovat" className={isActive('/about-innovat') ? "active about" : "about"} onClick={handleClose}>
                About Innovat
            </Link>

            <Link href="/investments" className={isActive('/investments') ? "active investments" : "investments"} onClick={handleClose}>
                Investments
            </Link>

            <Link href="/funding" className={isActive('/funding') ? "active funding" : "funding"} onClick={handleClose}>
                Funding
            </Link>

            <Link href="/education" className={isActive('/education') ? "active education-link" : "education-link"} onClick={handleClose}>
                Education
            </Link>

            <Link href="/research" className={isActive('/research') ? "active research" : "research"} onClick={handleClose}>
                Research
            </Link>

            <Link href="/contact" className={isActive('/contact') ? "active contact" : "contact"} onClick={handleClose}>
                Contact
            </Link>

            <ul className="d-lg-none d-flex social-icons">
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/innovat-official" className="footerIcon">
                        <LinkedIn />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://x.com/InnovatOfficial" className="footerIcon">
                        <Twitter2 />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@InnovatOfficial" className="footerIcon">
                        <Youtube />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://telegram.org/" className="footerIcon">
                        <Telegram />
                    </a>
                </li>
            </ul>
        </>
    );
};

export default NavigationBar;
