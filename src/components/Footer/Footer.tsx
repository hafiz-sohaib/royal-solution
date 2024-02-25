import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='royal-footer py-5'>
            <div className="container">
                <div className="row align-items-center mb-4">
                    <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                        <Image src={'/logo.svg'} width={216} height={52.29} alt='' />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
                        <div className="social-icons">
                            <a href=""><Image src={"/footer/youtube.svg"} width={30} height={30} alt='' /></a>
                            <a href=""><Image src={"/footer/insta.svg"} width={30} height={30} alt='' /></a>
                            <a href=""><Image src={"/footer/facebook.svg"} width={30} height={30} alt='' /></a>
                            <a href=""><Image src={"/footer/discord.svg"} width={30} height={30} alt='' /></a>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-lg-4 d-flex justify-content-center justify-content-lg-start">
                        <p className='copyright mb-4 mb-lg-0'>© {new Date().getFullYear()} Royal Solutions l All Rights reserved</p>
                    </div>
                    <div className="col-lg-8 d-flex justify-content-center justify-content-lg-end">
                        <div className="footer-menu">
                            <Link href={"/"}>Home</Link>
                            <Link href={"/services"}>Solutions</Link>
                            <Link href={"/why-us"}>Why Us</Link>
                            <Link href={"/about"}>About Us</Link>
                            <Link href={"/services"}>Services</Link>
                            <Link href={"/contact"}>Contact Us</Link>
                        </div>
                    </div>
                </div>

                <p className='text-center text-lg-start footer-content m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pellentesque dolor. Vivamus sollicitudin id libero ut venenatis. Phasellus vitae nibh quis tortor aliquet pulvinar vel sed orci. Duis tempor enim nec mollis auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
            </div>
        </footer>
    )
}