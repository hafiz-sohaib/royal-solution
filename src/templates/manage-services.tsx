// ~ Dependencies ~
import React from 'react'

// ~ Components ~
import Card from "@/components/Card/Card"


export default function manage_services() {
    return (
        <section className="services">
			<div className="container">
				<h1 className='text-center section-heading'>Managed <span>Services</span></h1>
				<p className='text-center mb-5'>Royal Solutions is not just about online casino and betting software.</p>
				<div className="row align-items-stretch g-4">
					<div className="col-sm-6 col-lg-4 col-xl-3">
						<Card cardClass="services" imgWidth={100} imgHeight={100} image={"/services/service-1.svg"} heading={"First-Line Support"} text={"24/7 Live Support provided for all our clients."} />
					</div>
					<div className="col-sm-6 col-lg-4 col-xl-3">
						<Card cardClass="services" imgWidth={100} imgHeight={100} image={"/services/service-2.svg"} heading={"Content Management"} text={"Thumbnails, Banners, Promotions are available through our client area."} />
					</div>
					<div className="col-sm-6 col-lg-4 col-xl-3">
						<Card cardClass="services" imgWidth={100} imgHeight={100} image={"/services/service-3.svg"} heading={"Anti-Fraud Support"} text={"Check against fraudulent transactions and players' activity."} />
					</div>
					<div className="col-sm-6 col-lg-4 col-xl-3">
						<Card cardClass="services" imgWidth={100} imgHeight={100} image={"/services/service-4.svg"} heading={"Casino Gamification"} text={"You have the chance to offer your players' various tournaments and bonuses."} />
					</div>
				</div>
			</div>
		</section>
    )
}