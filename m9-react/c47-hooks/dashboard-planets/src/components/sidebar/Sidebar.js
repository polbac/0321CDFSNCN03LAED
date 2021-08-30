import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

import { ContactModal } from '../contact-modal/ContactModal'

export default class Sidebar extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            displayContactModal: false,
        }
    }

    toggleContactModal() {
        this.setState({
            displayContactModal: !this.state.displayContactModal
        })
    }


    render() {
        const { title, subtitle } = this.props
        const { displayContactModal } = this.state

        return (
            <>
                <nav>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
    
                    <Link to='/'>Planets</Link>
                    <Link to='/about'>About</Link>
                    
                    <a onClick={() => this.toggleContactModal()} href="#">Contact</a>
                    
                </nav>   

                {displayContactModal && <ContactModal onClickClose={() => this.toggleContactModal()} />}
            </>
        )
    }

    
}