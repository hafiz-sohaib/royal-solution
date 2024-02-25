// ~ Dependencies ~
import React from 'react'
import Link from "next/link"

// ~ Templates ~
import Contact from "@/templates/contact"


export default function Page() {
    return (
        <>
        <section className="contact-hero">
            <div className="container">
                <h1 className='main-heading'>Contact Us</h1>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa voluptatibus dolor consequatur. Nostrum consequuntur quisquam odio quidem reprehenderit, ipsum explicabo expedita quod porro culpa consequatur maiores distinctio optio odit ratione quam similique debitis laudantium, nisi quasi aut tenetur sed error rerum. Obcaecati veniam eligendi itaque facilis cupiditate. Mollitia sequi perspiciatis, eos voluptate blanditiis ipsam ut alias placeat laborum odit deleniti ullam minima inventore possimus asperiores adipisci hic consequatur praesentium repudiandae minus facilis? Et ea maxime molestias, iusto quisquam ipsa quibusdam voluptate ab dolorem est nobis distinctio debitis, necessitatibus facilis sequi optio saepe veritatis rem vero neque repudiandae error, quos at.</p>
                <div className="d-flex flex-column flex-md-row align-items-stretch">
                    <Link href={"/"} className='btn btn-primary mb-3 mb-md-0 me-md-3'>Get Started With Us!</Link>
                    <Link href={"/"} className='btn btn-outline-primary'>free Consultation</Link>
                </div>
            </div>
        </section>

        <Contact />
        </>
    )
}
