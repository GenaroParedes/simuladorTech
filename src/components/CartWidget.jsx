import '../css/CartWidget.css'
// Libreria de ReactIcons
import { TiShoppingCart } from "react-icons/ti";
export default function CartWidget(){
    return(
        <div className="cart-widget">
            <TiShoppingCart fontSize={'2rem'}/>
            <span className="cart-count">0</span>
        </div>
    )
}