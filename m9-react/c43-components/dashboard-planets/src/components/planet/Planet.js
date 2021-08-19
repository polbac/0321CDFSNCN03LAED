import "./style.css"

export default function Planet({ title, image }) {
    return (
        <article className='planet'>
            <h2>{title}</h2>
            <img src={image} width="100%" />
        </article>
    )
}