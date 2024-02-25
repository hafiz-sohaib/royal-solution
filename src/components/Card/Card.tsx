import React from 'react'
import Image from 'next/image'
import "./Card.css"

export default function Card({ ...props }) {
    return (
        <div className={`card royal-card ${props.cardClass}`}>
            <div className="card-body">
                <Image src={props.image} width={props.imgWidth} height={props.imgHeight} alt="Title" />
                <h4 className="card-title">{props.heading}</h4>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}