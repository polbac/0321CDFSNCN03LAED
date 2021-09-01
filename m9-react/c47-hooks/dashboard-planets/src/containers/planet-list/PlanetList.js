import { useEffect, useState, useMemo } from 'react'
import { Code } from 'react-content-loader'
import { API_PLANETS } from '../../config'
import Planet from '../../components/planet/Planet'
import "./style.css"


export default function PlanetList() {
    const [planets, setPlanets] = useState([])
    const [loading, setLoading] = useState(true)

    // componentDidMount
    useEffect(() => {
        fetch(API_PLANETS)
            .then(res => res.json())
            .then(data => {
                setPlanets(data.data.planets)
                setLoading(false)  
            })
    }, [])

    const planetsQuantity = useMemo(() => {
        // codigo
        return planets.length
    }, [planets.length])

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