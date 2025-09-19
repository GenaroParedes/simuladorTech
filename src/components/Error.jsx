import { Link } from "react-router-dom"
const Error = () => {
    return (
        <div>
            <h1>Error: No se pudo cargar el componente</h1>
            <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
    )
}
export default Error