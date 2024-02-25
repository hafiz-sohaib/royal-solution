import React from 'react'
import Image from 'next/image'

export default function our_partners() {
    return (
        <section className="our-partners">
			<div className="container">
				<div className="row align-items-start g-4 g-xl-5">
					<div className="col-12 col-lg-4">
						<h1 className='section-heading mb-4 mb-lg-0 text-center text-lg-start'>Our Partners</h1>
					</div>
					<div className="col-6 col-md-3 col-lg-2 text-center">
						<Image src={"/op-icon-1.svg"} width={165} height={45} alt='' />
					</div>
					<div className="col-6 col-md-3 col-lg-2 text-center">
						<Image src={"/op-icon-1.svg"} width={165} height={45} alt='' />
					</div>
					<div className="col-6 col-md-3 col-lg-2 text-center">
						<Image src={"/op-icon-1.svg"} width={165} height={45} alt='' />
					</div>
					<div className="col-6 col-md-3 col-lg-2 text-center">
						<Image src={"/op-icon-1.svg"} width={165} height={45} alt='' />
					</div>
				</div>
			</div>
		</section>
    )
}