import { useEffect, useRef } from 'react'
import './style.css'
import Close from './close.png'

export function ContactModal({ onClickClose }) {
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    } , [])
        
    return (
        <aside id="contact-modal">
            <div className="contact-wrapper">
                
                <h4>Contact</h4>
                <p>Dirección: Monroe 860</p>
                <p>Tel: 011-5263-7400</p>

                <form>
                    <input ref={inputRef} placeholder="Ingrese su email"></input>
                </form>

                <div onClick={onClickClose} className="close">
                    <img width="30" src={Close} />
                </div>
            </div>
        </aside>
    )
}