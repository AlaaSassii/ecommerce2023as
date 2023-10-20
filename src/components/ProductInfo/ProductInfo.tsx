import { FC } from 'react'
import Stars from '../Stars'
import { useProductActions } from '../../hooks/useProductActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import { singleProduct } from '../../types/singleProduct'
import './ProductInfo.scss'
type PrpductInfoProps = {
    image: string,
    price: number,
    rate: number,
    title: string,
    description: string,
    category: string,
    id: number,
    product: singleProduct
}
const ProductInfo: FC<PrpductInfoProps> = ({ id, description, image, price, rate, title, product }) => {
    const { deleteProduct, getProduct } = useProductActions()
    const { userCartProduct } = useAppSelector(state => state.userCart)
    const productInCart = userCartProduct.find(product => product.id === id)
    return (
        <div className='product__info'>
            <div className='product__image'>
                <img src={image} alt={title} />
            </div>
            <div className='info'>
                <p><b>Product Title:</b>{title}</p>
                <p><b>Product Description:</b>{description}</p>
                <p><b>Product Price:</b>{price}$</p>
                <p><b>Starts:</b> <Stars fontSize='large' rate={rate} /></p>
                <button className='add_to_cart__btn' onClick={() => { productInCart ? deleteProduct(id) : getProduct(product) }}>
                    {productInCart ? "Remove from Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    )
}

export default ProductInfo