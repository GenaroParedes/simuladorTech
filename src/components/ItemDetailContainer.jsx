import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getOneProduct } from "../mock/AsyncService"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([])
    //Para traer un producto en particular, necesito el id del producto. Ese id lo voy a traer desde la URL con useParams.
    const {id} = useParams()
    useEffect(() => {
        getOneProduct(id)
        .then((res) => setDetalle(res))
        .catch((err) => console.log(err))
    }, [id])
    
    return (
        <div>
            <ItemDetail detalle={detalle}/>
        </div>
    )
}

export default ItemDetailContainer