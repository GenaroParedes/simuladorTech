import { useState, useEffect } from "react"
import { getProductos } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

export default function ItemListContainer({mensaje}){
    const [data, setData] = useState([])
    const {type} = useParams()
    console.log(type)
    //Cada vez que el parametro type cambie, se va a disparar el useEffect. Tiene logica ya que si type tiene algo, va a filtrar los productos por categoria, y si no tiene nada, va a traer todos los productos.
    useEffect(() => {
        getProductos()
        .then(res => {
            if(type){
                setData(res.filter(prod => prod.category === type))
            } else {
                setData(res)
            }
        })
        .catch(err => console.error(err))
    }, [type])

    return(
        <div className="itemListContainer container">
            <h2 style={{textAlign:'center', marginTop:'20px'}}>{mensaje}</h2>
            <ItemList data={data}/>
        </div>
    )
}