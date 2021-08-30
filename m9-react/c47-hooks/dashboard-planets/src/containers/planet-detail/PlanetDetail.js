import React from 'react'
import { Code } from 'react-content-loader'
import { API_PLANETS_DETAIL } from '../../config'
import "./style.css"
export default class PlanetDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            planetDetail: null
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params

        fetch(`${API_PLANETS_DETAIL}${id}`)
            .then(res => res.json())
            .then(planetDetail => {
                this.setState({
                    loading: false,
                    planetDetail: planetDetail.data.planet,
                })
            })
    }
    render() {
        const { loading, planetDetail } = this.state

        return (
            <section class="planet-detail">
                { loading ? (
                        <Code
                            height={140}
                            speed={1}
                            backgroundColor={'#333'}
                            foregroundColor={'#999'}
                        />
                    ) : (
                    <>
                        <h3>{planetDetail.name}</h3>
                        <div className="columns">
                            <img src={`/${planetDetail.image}`} />
                            <p>{planetDetail.description}</p>
                        </div>
                    </>
                    )
                }
            </section>
        )
    }
}