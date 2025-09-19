import '../css/Navbar.css'
import Logo from './Logo.jsx'
import CartWidget from './CartWidget.jsx'
import Menu from './Menu.jsx'

export default function Navbar(){
    return(
      <div className='navbar'>
        <nav className='navbar-container'>
            <Logo/>
            <div className='nav-links'>
              <a href="#">Auriculares</a>
              <a href="#">Mouses</a>
              <a href="#">Teclados</a>
            </div>
            <div className='nav-icons'>
              <Menu/>
              <CartWidget/>
            </div>
        </nav>
      </div>
    )
}