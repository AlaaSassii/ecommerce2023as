import { useAppSelector } from '../../hooks/useAppSelector'
import SinlgeProductSidebar from '../SinlgeProductSidebar'
import noProductFound from '../../assets/no-products-found.png'
import { IoCloseSharp } from 'react-icons/io5'
import './ProductsSidebar.scss'


const ProductsSidebar = () => {
    const { userCartProduct } = useAppSelector(state => state.userCart)
    return (
        <div className='product__sidebar'>
            <button className='close__sidebar__btn'><IoCloseSharp /></button>
            <div className='product__sidebar__container'>
                {
                    userCartProduct.length > 0
                        ?
                        userCartProduct.map(product =>
                            <SinlgeProductSidebar
                                amount={product.amount}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                key={`product__${product.id}`}
                            />)
                        :
                        <div className='empty'>
                            <h3>there is no user product</h3>
                            <img src={noProductFound} alt="" />
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductsSidebar