export default function Select({ gatitos, handleChange }) {
    return (
        <select style={{ width: '150px' }} value={gatitos.name} onChange={handleChange}>
            <option key='0' value='--none--'>--none--</option>
            {gatitos.map(item => {
                return <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>;
            })}
        </select>
    )
}