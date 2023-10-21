import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import { FiShoppingCart } from 'react-icons/fi'
import { useSideBar } from '../../hooks/useSidebar'

const Navbar = () => {
    const { toggleUserProductSidebarFunction } = useSideBar()
    return (
        <div>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/products' >Products</NavLink>
            <NavLink to='/user-product-cart' >user cart</NavLink>
            <NavLink to='/contact' >contact us</NavLink>
            <button onClick={() => toggleUserProductSidebarFunction()}><FiShoppingCart /></button>
        </div>
    )
}

export default Navbar