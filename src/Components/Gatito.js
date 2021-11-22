import "../Styles/Gatito.css"
export default function Gatito({ value }) {
    return (
        <div className="card">
            <h1>{value.name}</h1>
            <img style={{ width: "250px", height: "250px" }} src={value.image.url} alt={value.image.url}></img>
            <div className="description">
            <h2>Description</h2>
            <p>{value.description}</p>
            </div>
        </div>
    )
}