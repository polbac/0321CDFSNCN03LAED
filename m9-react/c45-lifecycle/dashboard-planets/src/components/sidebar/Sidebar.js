import React from 'react'
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
    
                    <a className="active" href="#">Planets</a>
                    <a href="#">Galaxies</a>
                    <a href="#">Satellities</a>
                    {/* <a onClick={() =>this.showContactModal()} href="#">Contact</a> */}
                    <a onClick={() => this.toggleContactModal()} href="#">Contact</a>
                    
                </nav>   

                {displayContactModal && <ContactModal onClickClose={() => this.toggleContactModal()} />}
            </>
        )
    }

    
}