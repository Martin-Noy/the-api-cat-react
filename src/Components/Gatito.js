export default function Gatito({ value }) {
    return (
        <div>
            <h1>{value.name}</h1>
            <img style={{ width: "250px", height: "250px" }} src={value.image.url} alt={value.image.url}></img>
            <h2>Description</h2>
            <p>{value.description}</p>
        </div>
    )
}