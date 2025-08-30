export default function ItemListContainer({title, parrafo}){
    return(
        <div className="itemListContainer container">
            <h2>{title}</h2>
            <h3>{parrafo}</h3>
        </div>
    )
}