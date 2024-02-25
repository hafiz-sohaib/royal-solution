"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image'
import "./Navbar.css"

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="navbar royal-navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" href={"/"}>
                    <Image src={"/logo.svg"} width={183} height={44.31} alt='Logo' />
                </Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <Image src={"/hamburger.svg"} width={35} height={35} alt='' />
                </button>
                <div className="collapse navbar-collapse text-center" id="collapsibleNavId">
                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname==="/"?"active":""}`} href={"/"}>Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" href={"/services"}>Solutions</Link>
                            <div className="dropdown-menu">
                                <Link className={`dropdown-item ${pathname.includes("sportsbook")?"active":""}`} href={"/services/sportsbook"}>Sportsbook</Link>
                                <Link className={`dropdown-item ${pathname.includes("white-label")?"active":""}`} href={"/services/white-label"}>White-label</Link>
                                <Link className={`dropdown-item ${pathname.includes("turnkey")?"active":""}`} href={"/services/turnkey"}>Turnkey</Link>
                                <Link className={`dropdown-item ${pathname.includes("api-solution")?"active":""}`} href={"/services/api-solution"}>API Solution</Link>
                                <Link className={`dropdown-item ${pathname.includes("retail-solution")?"active":""}`} href={"/services/retail-solution"}>Retail Solution</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname==="/why-us"?"active":""}`} href={"/why-us"}>Why Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname==="/about"?"active":""}`} href={"/about"}>About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`nav-link ${pathname.includes("services")?"active":""}`} href={"/services"}>Services</Link>
                            <div className="dropdown-menu">
                                <Link className={`dropdown-item ${pathname.includes("sportsbook")?"active":""}`} href={"/services/sportsbook"}>Sportsbook</Link>
                                <Link className={`dropdown-item ${pathname.includes("white-label")?"active":""}`} href={"/services/white-label"}>White-label</Link>
                                <Link className={`dropdown-item ${pathname.includes("turnkey")?"active":""}`} href={"/services/turnkey"}>Turnkey</Link>
                                <Link className={`dropdown-item ${pathname.includes("api-solution")?"active":""}`} href={"/services/api-solution"}>API Solution</Link>
                                <Link className={`dropdown-item ${pathname.includes("retail-solution")?"active":""}`} href={"/services/retail-solution"}>Retail Solution</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname==="/contact"?"active":""}`} href={"/contact"}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <Link href={"/contact"} className="btn btn-primary d-none d-lg-block">Get in Touch</Link>
            </div>
        </nav>
    )
}