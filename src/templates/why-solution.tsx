// ~ Dependencies ~
import React from 'react'

// ~ Components ~
import Card from "@/components/Card/Card"

export default function why_solution() {
    return (
        <section className="why-us">
			<div className="container">
				<h1 className='text-center section-heading'>Why <span>Royal Solutions?</span></h1>
				<p className='text-center mb-5'>Royal Solutions is not just about online casino and betting software.</p>
				<div className="row align-items-stretch g-4">
					<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
						<Card cardClass="why-us" imgWidth={100} imgHeight={100} image={"/why-us/icon-1.svg"} heading={"Fast Project Delivery"} text={"Get the highest product quality in the shortest period possible. less time for high quality."} />
					</div>
					<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
						<Card cardClass="why-us" imgWidth={100} imgHeight={100} image={"/why-us/icon-2.svg"} heading={"Always by your Side"} text={"Get the highest product Our support team is always ready to help you at any time. "} />
					</div>
					<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="700">
						<Card cardClass="why-us" imgWidth={100} imgHeight={100} image={"/why-us/icon-3.svg"} heading={"Years of experience"} text={"We have been well known in the market for years as software solution provider, and always trying to improve and innovate."} />
					</div>
					<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="900">
						<Card cardClass="why-us" imgWidth={100} imgHeight={100} image={"/why-us/icon-4.svg"} heading={"Cutting-Edge Technology"} text={"From web to retail, we provide all the solutions with the best technology available at the moment."} />
					</div>
					<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="1100">
						<Card cardClass="why-us" imgWidth={100} imgHeight={100} image={"/why-us/icon-5.svg"} heading={"Stable and Secure"} text={"Our security specialists are working day and night to provide you with the most secure and stable platform, from technical security to financial fraud management."} />
					</div>
					<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="1300">
						<Card cardClass="why-us" imgWidth={100} imgHeight={100} image={"/why-us/icon-6.svg"} heading={"Free Updates"} text={"Our main purpose is to keep our clients satisfied, our content is being updated daily. Innovation and improvement is our top priority."} />
					</div>
				</div>
			</div>
		</section>
    )
}