import React from 'react'
import "./style.css"

import { ContactModal } from '../contact-modal/ContactModal'

export default function Sidebar({ title, subtitle }) {
    return (
        <>
            <nav>
                <h1>{title}</h1>
                <p>{subtitle}</p>

                <a className="active" href="#">Planets</a>
                <a href="#">Galaxies</a>
                <a href="#">Satellities</a>
                <a href="#">Contact</a>
                
            </nav>   
            <ContactModal/>
        </>
    )
}