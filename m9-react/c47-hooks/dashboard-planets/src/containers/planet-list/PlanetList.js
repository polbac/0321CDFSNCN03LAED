import { Component } from 'react'
import { Code } from 'react-content-loader'
import { API_PLANETS } from '../../config'
import Planet from '../../components/planet/Planet'
import "./style.css"


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
        
        const { planets, loading } = this.state

        const planetsQuantity = planets.length

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
                                        planetId={planet.id}
                                    />
                                )
                            })}
                        
                        </>
                    )}
                    
                </section>
            </>
        )
    }
}