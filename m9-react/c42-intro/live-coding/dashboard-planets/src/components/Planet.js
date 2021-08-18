export default function Planet({ title, color, image }) {
    return (
        <article className='planet'>
            <h2>{title}</h2>
            <p>Color: {color}</p>
            <img src={image} width="100%" />
        </article>
    )
}