import React from 'react'
import Countup from "react-countup"

export default function rsin() {
    return (
        <section className="rsin">
			<div className="container">
				<div className="row align-items-start g-0 g-md-2 g-xl-5">
					<div className="col-12 col-lg-4">
						<h1 className='section-heading mb-5 mb-lg-0 text-center text-lg-start'>Royal Solutions in Numbers</h1>
					</div>
					<div className="col-3 col-lg-2 text-center">
						<div className="counter d-flex flex-column justify-content-center">
							<h1 className='mb-2'><Countup start={0} end={60} suffix='+' /></h1>
							<strong>LOYAL CLIENTS</strong>
						</div>
					</div>
					<div className="col-3 col-lg-2 text-center">
						<div className="counter d-flex flex-column justify-content-center">
							<h1 className='mb-2'><Countup start={0} end={80} suffix='+' /></h1>
							<strong>GAME PROVIDERS</strong>
						</div>
					</div>
					<div className="col-3 col-lg-2 text-center">
						<div className="counter d-flex flex-column justify-content-center">
							<h1 className='mb-2'><Countup start={0} end={5} prefix='0' suffix='+' /></h1>
							<strong>YEARS OF EXPERIENCE</strong>
						</div>
					</div>
					<div className="col-3 col-lg-2 text-center">
						<div className="counter d-flex flex-column justify-content-center">
							<h1 className='mb-2'><Countup start={0} end={24} suffix='/7' /></h1>
							<strong>HOURS SUPPORT</strong>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}