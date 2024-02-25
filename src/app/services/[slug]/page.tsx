"use client"

// ~ Dependencies ~
import React, { useEffect } from 'react'
import Link from "next/link"
import AOS from "@/config/aos.config"

// ~ Templates ~
import Interested from "@/templates/interested"
import Rsin from "@/templates/rsin"
import Direction from "@/templates/direction"
import ManageServices from "@/templates/manage-services"

interface PageProps {
    params: { slug: string };
}


const Page: React.FC<PageProps> = ({ params }) => {
    useEffect(() => AOS)

    return (
        <>
        <section className="service-hero">
            <div className="container">
                <h1 className='main-heading'>{params.slug}</h1>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa voluptatibus dolor consequatur. Nostrum consequuntur quisquam odio quidem reprehenderit, ipsum explicabo expedita quod porro culpa consequatur maiores distinctio optio odit ratione quam similique debitis laudantium, nisi quasi aut tenetur sed error rerum. Obcaecati veniam eligendi itaque facilis cupiditate. Mollitia sequi perspiciatis, eos voluptate blanditiis ipsam ut alias placeat laborum odit deleniti ullam minima inventore possimus asperiores adipisci hic consequatur praesentium repudiandae minus facilis? Et ea maxime molestias, iusto quisquam ipsa quibusdam voluptate ab dolorem est nobis distinctio debitis, necessitatibus facilis sequi optio saepe veritatis rem vero neque repudiandae error, quos at.</p>
                <div className="d-flex flex-column flex-md-row align-items-stretch">
                    <Link href={"/"} className='btn btn-primary mb-3 mb-md-0 me-md-3'>Get Started With Us!</Link>
                    <Link href={"/"} className='btn btn-outline-primary'>free Consultation</Link>
                </div>
            </div>
        </section>

        <Rsin />
        <Direction />
		<ManageServices />
		<Interested />
        </>
    )
}

export default Page;