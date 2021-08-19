import { PLANETS } from '../../config'
import Planet from '../planet/Planet'
import "./style.css"

export default function PlanetList(){
    const planet = PLANETS[0]
    /* TODO: vamos a mapear un array para generar los planetas */    
    return (
        <section className='planets'>
            <Planet 
                title={planet.name} 
                image={`/${planet.image}`}
            />
        </section>
    )
}