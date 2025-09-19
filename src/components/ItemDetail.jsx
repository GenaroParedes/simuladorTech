import '../css/ItemDetail.css'

const ItemDetail = ({detalle}) => {
    return (
        <div className="item-detail">
            <div className='item-detail-img'>
                <img src={detalle.img} alt={detalle.name}/>
            </div>
            <div className='item-detail-body'>
                <h2>{detalle.name}</h2>
                <p>{detalle.description}</p>
                <p>Precio: ${detalle.price}</p>
                <p>Stock disponible: {detalle.stock}</p>
                <p>Categoría: {detalle.category}</p>
            </div>
        </div>
    )
}

export default ItemDetail