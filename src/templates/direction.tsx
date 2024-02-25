// ~ Dependencies ~
import React from 'react'
import Link from "next/link"

// ~ Components ~
import Card from "@/components/Card/Card";

export default function direction() {
    return (
        <section className="direction-start">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-xl-6"></div>
					<div className="col-lg-7 col-xl-6">
						<h1 className='main-heading'>Royal Solutions</h1>
						<h3 className='subheading'>IS YOUR ONE STOP DIRECTION TO START YOUR ONLINE IGAMING BUSINESS IN THE SHORTEST TIME POSSIBLE.</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pellentesque dolor. Vivamus sollicitudin id libero ut venenatis. Phasellus vitae nibh quis tortor aliquet pulvinar vel sed orci. Duis tempor enim nec mollis auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ac facilisis dui. <br/><br/> Sed interdum ipsum eu metus laoreet, non faucibus enim faucibus. Donec viverra vulputate diam ut fermentum. Pellentesque pharetra tempor est, et maximus ligula sodales et. Curabitur vitae urna ut orci porta placerat sed non ex.</p>
						<div className="row g-4 mb-5">
							<div className="col-6 col-md-4">
								<Card cardClass="direction" imgWidth={70} imgHeight={70} image={"/direction/direction-1.svg"} heading={"Responsability"} text={"All our partners are well known and licensed, providing our clients the top tier casino games and betting platforms."} />
							</div>
							<div className="col-6 col-md-4">
								<Card cardClass="direction" imgWidth={70} imgHeight={70} image={"/direction/direction-2.svg"} heading={"Flexibility"} text={"Each client is unique, therefore we will gather all the expertise to find the best solution to deliver success."} />
							</div>
							<div className="col-6 col-md-4">
								<Card cardClass="direction" imgWidth={70} imgHeight={70} image={"/direction/direction-3.svg"} heading={"Creativity"} text={"Nothing limits our creative team, we are always looking for improvements."} />
							</div>
						</div>
						<p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pellentesque dolor.</p>
						<div className="d-flex flex-column flex-md-row align-items-stretch">
							<Link href={"/"} className='btn btn-primary mb-3 mb-md-0 me-md-3'>Get Started With Us!</Link>
							<Link href={"/"} className='btn btn-outline-primary'>free Consultation</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}