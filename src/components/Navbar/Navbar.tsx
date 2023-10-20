import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/products' >Products</NavLink>
            <NavLink to='/user-product-cart' >user cart</NavLink>
            <NavLink to='/contact' >contact us</NavLink>
        </div>
    )
}

export default Navbar