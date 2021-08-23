import PropTypes from 'prop-types'

import { Card } from '../card/Card'

import "./style.css"

function Planet({ title, image }) {
    return (
        <Card>
            <article className='planet'>
                <h2>{title}</h2>
                <img src={`/${image}`} width="100%" />
            </article>
        </Card>
    )
}


Planet.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
}


Planet.defaultProps = {
    image: 'astronauta.jpeg'
}

export default Planet