import './ProductsSidebar.scss'
import { useAppSelector } from '../../hooks/useAppSelector'
import SinlgeProductSidebar from '../SinlgeProductSidebar'


const ProductsSidebar = () => {
    const { userCartProduct } = useAppSelector(state => state.userCart)
    return (
        <div className='product__sidebar'>
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
                        <h3 className='empty'>there is no user product</h3>
                }
            </div>
        </div>
    )
}

export default ProductsSidebar