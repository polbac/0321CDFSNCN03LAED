import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Code } from 'react-content-loader'
import { API_PLANETS_DETAIL } from '../../config'
import "./style.css"

export default function PlanetDetail() {
    const { id } = useParams()

    const [planetDetail, setPlanetDetail] = useState({
        data: null,
        loading: true,
    })
    
    useEffect(() => {
        fetch(`${API_PLANETS_DETAIL}${id}`)
            .then(res => res.json())
            .then(planetApi => {
                setPlanetDetail({
                    loading: false,
                    data: planetApi.data.planet,
                })
            })
    }, [id])
    
    const { loading, data } = planetDetail

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
                    <h3>{data.name}</h3>
                    <div className="columns">
                        <img src={`/${data.image}`} />
                        <p>{data.description}</p>
                    </div>
                    <Link to={'/planet/4'}>Otro planeta</Link>
                </>
                )
            }
        </section>
    )
}