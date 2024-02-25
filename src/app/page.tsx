"use client"

// ~ Dependencies ~
import React, { useEffect } from 'react'
import Link from 'next/link'
import AOS from "@/config/aos.config"

// ~ Components ~
import Card from "@/components/Card/Card"

// ~ Templates ~
import OurPartners from "@/templates/our-partners"
import WhySolution from "@/templates/why-solution"
import Rsin from "@/templates/rsin"
import Direction from "@/templates/direction"
import ManageServices from "@/templates/manage-services"
import Interested from "@/templates/interested"
import Contact from "@/templates/contact"


export default function Page() {
	useEffect(() => AOS)

	return (
		<>
		<section className="hero">
			<div className='container'>
				<div className="row mb-5">
					<div className="col-lg-8 col-xl-6">
						<div className="hero-caption">
							<h1 className='main-heading mb-0'>bespoke casino</h1>
							<h3 className='subheading'>and sportsbook platforms provider</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pellentesque dolor. Vivamus sollicitudin id libero ut venenatis. Phasellus vitae nibh quis tortor aliquet pulvinar vel sed orci. Duis tempor enim nec mollis auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ac facilisis dui.</p>
							<div className="d-flex flex-column flex-md-row align-items-stretch">
								<Link href={"/"} className='btn btn-primary mb-3 mb-md-0 me-md-3'>Get Started With Us!</Link>
								<Link href={"/"} className='btn btn-outline-primary'>free Consultation</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="card hero-card">
					<div className="card-body">
						<h1 className="card-title section-heading" data-aos="fade-up"><span>Bespoke</span> Igaming Solutions</h1>
						<p className="card-text" data-aos="fade-up" data-aos-delay="200">Royal Solutions is not just about online casino and betting software. We also provide cost-effective White Label solutions and various operational services to our clients.</p>
						<div className="row g-4">
							<div className="col-sm-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="300">
								<Card cardClass="heroCard" imgWidth={100} imgHeight={100} image={"/hero/api.svg"} heading={"Games API Solution"} text={"Unified API Integration. Automated Games Catalogue. Promo & Gamification Tools"} />
							</div>
							<div className="col-sm-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="450">
								<Card cardClass="heroCard" imgWidth={100} imgHeight={100} image={"/hero/api.svg"} heading={"Whitelabel Solution"} text={"Modern Front-end Design. Payment Methods Of Choice. Secure, Fast & Reliable Backend"} />
							</div>
							<div className="col-sm-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="600">
								<Card cardClass="heroCard" imgWidth={100} imgHeight={100} image={"/hero/api.svg"} heading={"Turnkey Solution"} text={"License Assistance. Custom Frontend Design. Unified Backoffice"} />
							</div>
							<div className="col-sm-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="750">
								<Card cardClass="heroCard" imgWidth={100} imgHeight={100} image={"/hero/api.svg"} heading={"Sportsbook API"} text={"Easy To Integrate. Thousands of Monthly Live Events. Modern Design With Backend"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<OurPartners />
		<WhySolution />
		<Rsin />
		<Direction />
		<ManageServices />
		<Interested />
		<Contact />
		</>
	)
}