// ~ Dependencies ~
import React from 'react'
import Link from 'next/link'

export default function interested() {
    return (
        <section className="interested">
			<div className="container">
				<div className="interested-card d-flex flex-column align-items-center">
					<h1 className="text-center section-heading">ARE YOU INTERESTED?</h1>
					<p className="text-center">Share your plans with our sales team and together we will find the right solution for your business.</p>
					<div className="d-flex flex-column flex-md-row align-items-stretch">
						<Link href={"/"} className='btn btn-secondary me-0 me-md-3 mb-3 mb-md-0'>Get Started With Us!</Link>
						<Link href={"/"} className='btn btn-outline-secondary'>free Consultation</Link>
					</div>
				</div>
			</div>
		</section>
    )
}