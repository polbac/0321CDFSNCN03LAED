import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Card } from '../card/Card'

import "./style.css"

function Planet({ title, image, planetId }) {
    return (
        <Card>
            <article className='planet'>
                <Link to={`/planet/${planetId}`}>
                    <h2>{title}</h2>
                    <img src={`/${image}`} width="100%" />
                </Link>
            </article>
        </Card>
    )
}


Planet.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    planetId: PropTypes.number.isRequired,
}


Planet.defaultProps = {
    image: 'astronauta.jpeg'
}

export default Planet