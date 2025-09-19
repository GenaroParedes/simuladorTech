import { Link } from "react-router-dom";
export default function Logo() {
    const logo = 'https://i.postimg.cc/7hjSGyKF/logo1.png';
    return (
        <Link to='/'>
            <img src={logo} height='70px' width='70px' alt="Logo E-commerce" />
        </Link>
    )
    
}