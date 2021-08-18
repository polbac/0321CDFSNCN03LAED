import { PlanetTitle, PlanetColor, PlanetImage} from '../config'
import Planet from './Planet'

export default function Planets(){
    /* TODO: vamos a mapear un array para generar los planetas */    
    return (
        <section className='planets'>
            <Planet 
                title={PlanetTitle} 
                color={PlanetColor}
                image={PlanetImage}
            />
        </section>
    )
}