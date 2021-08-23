import React from 'react'
import "./nav.css"

// title -> string
export default function Sidebar({ title, subtitle }) {
    return (
     <nav>
         <h1>{title}</h1>
         <p>{subtitle}</p>

         <a className="active" href="#">Planets</a>
         <a href="#">Galaxies</a>
         <a href="#">Satellities</a>
     </nav>   
    )
}