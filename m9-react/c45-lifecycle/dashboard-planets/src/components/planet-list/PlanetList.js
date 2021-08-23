import { PLANETS } from '../../config'
import Planet from '../planet/Planet'
import "./style.css"
import { isEven } from '../../helpers/helpers'


export default function PlanetList(){
    const planetsQuantity = PLANETS.length
    const evenNumberPlanets = isEven(planetsQuantity)

    return (
        <>
            <section className='planets'>
                <h2>Tenemos {planetsQuantity} planetas:</h2>    
                <br/>
                {PLANETS.map(planet => {
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
                
                
                
            </section>
        </>
    )
}