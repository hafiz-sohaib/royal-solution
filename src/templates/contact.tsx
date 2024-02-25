import React from 'react'
import { contactFunc } from "@/server/actions/contact"

export default function contact() {
    return (
        <section className="contact">
			<div className="container">
				<div className="row">
					<div className="col-lg-10 col-xl-8 mx-auto">
						<form action={contactFunc}>
							<h1 className="text-center section-heading"><span>GET IN TOUCH</span> WITH US!</h1>
							<div className="row mb-3 mb-md-4 g-3 g-md-4">
								<div className="col-sm-6">
									<input type="text" className="form-control" placeholder='Name' />
								</div>
								<div className="col-sm-6">
									<input type="text" className="form-control" placeholder='Email' />
								</div>
							</div>
							<div className="mb-3 mb-md-4">
								<input type="text" className="form-control" placeholder='Phone Number' />
							</div>
							<div className="mb-3 mb-md-4">
								<input type="text" className="form-control" placeholder='Company' />
							</div>
							<div className="row mb-3 mb-md-4 g-3 g-md-4">
								<div className="col-sm-6">
									<input type="text" className="form-control" placeholder='Subject' />
								</div>
								<div className="col-sm-6">
									<input type="text" className="form-control" placeholder='Skype' />
								</div>
							</div>
							<div className="mb-3 mb-md-4">
								<input type="text" className="form-control" placeholder='Country/Region' />
							</div>
							<div className="mb-4 mb-md-5">
								<textarea rows={1} className="form-control" placeholder='Message'></textarea>
							</div>
							<div className="d-flex justify-content-center">
								<button type='submit' className="btn btn-primary">submit now!</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
    )
}