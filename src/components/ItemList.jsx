import Item from "./Item"
import '../css/ItemList.css'
const ItemList = ({data}) => {
    return (
        <div className="item-list">
            {data.map((producto) => <Item key={producto.id} prod={producto}/>) }
        </div>
        
)}
export default ItemList;