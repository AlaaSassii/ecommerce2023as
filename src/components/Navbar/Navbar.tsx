import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import { FiShoppingCart } from 'react-icons/fi'
import { useSideBar } from '../../hooks/useSidebar'
import { AiFillHeart } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import Logo from '../../assets/Logo.png'
import Container from '../Container'
import { useAppSelector } from '../../hooks/useAppSelector'
const Navbar = () => {
    const { toggleUserProductSidebarFunction } = useSideBar()
    const { userCartProduct } = useAppSelector(state => state.userCart)
    const userCartProductNumber = userCartProduct.length
    return (
        <nav>
            <Container>
                <header>
                    <div className="logo">
                        <img src={Logo} />
                    </div>
                    <ul>
                        <li> <NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to='/' >Home</NavLink></li>
                        <li> <NavLink to='/products' className={({ isActive }) =>
                            isActive ? "active" : ""
                        } > Productse</NavLink></li>
                        <li> <NavLink to='/user-product-cart' className={({ isActive }) =>
                            isActive ? "active" : ""
                        } >user cart</NavLink></li>
                        <li> <NavLink to='/contact' className={({ isActive }) =>
                            isActive ? "active" : ""
                        } >contact us</NavLink></li>
                    </ul>
                    <div className="buttons">
                        <button><BsPerson /></button>
                        <button><AiFillHeart /></button>
                        <button onClick={() => toggleUserProductSidebarFunction()}><FiShoppingCart /> <div>{userCartProductNumber > 9 ? "9 +" : userCartProductNumber}</div></button>
                    </div>
                </header>
            </Container>
        </nav>
    )
}

export default Navbar
