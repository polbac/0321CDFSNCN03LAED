import React from 'react'
import './style.css'
import Close from './close.png'

export class ContactModal extends React.Component {

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.text)
    }

    render(){
        const { onClickClose } = this.props
        
        return (
            <aside id="contact-modal">
                <div className="contact-wrapper">
                    
                    <h4>Contact</h4>
                    <p>Dirección: Monroe 860</p>
                    <p>Tel: 011-5263-7400</p>
                    <div onClick={onClickClose} className="close">
                        <img width="30" src={Close} />
                    </div>
                </div>
            </aside>
        )
    }
}