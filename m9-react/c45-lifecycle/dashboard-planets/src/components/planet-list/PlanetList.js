import { Component } from 'react'
import { Code } from 'react-content-loader'
import { API_PLANETS } from '../../config'
import Planet from '../planet/Planet'
import "./style.css"
import { isEven } from '../../helpers/helpers'


export default class PlanetList extends Component{
    constructor(props) {
        super(props)

        this.state = {
            planets: [],
            loading: true,
            name: 'Desmontado',
            
        }
    }

    componentDidMount() {
        fetch(API_PLANETS)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    planets: data.data.planets,
                    loading: false,
                })
            })
    }

    render() {
        
        const { name, planets, loading } = this.state

        const planetsQuantity = planets.length
        const evenNumberPlanets = isEven(planetsQuantity)

        return (
            <>
                <section className='planets'>

                    { loading ? (
                        <Code
                            height={140}
                            speed={1}
                            backgroundColor={'#333'}
                            foregroundColor={'#999'}
                        />
                    ) : (
                        <>
                            <h2>Tenemos {planetsQuantity} planetas:</h2>    
                            
                            {planets.map(planet => {
                                return (
                                    <Planet 
                                        title={planet.name} 
                                        image={planet.image} 
                                        key={`planet-${planet.id}`}
                                    />
                                )
                            })}
                            
                            {evenNumberPlanets ? (
                                <p>La cantidad de planetas es par</p>
                            ) : (
                                <p>La cantidad de planetas es impar</p>
                            )}
                        </>
                    )}
                    
                </section>
            </>
        )
    }
}