import { FC } from 'react'

import Stars from '../Stars'
import { useNavigate } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useProductActions } from '../../hooks/useProductActions'
import { singleProduct } from '../../types/singleProduct'
import './ProductCard.scss'

type productCardType = {
    id: number,
    image: string,
    rate: number,
    title: string,
    price: number,
    rateCount: number
    category: string,
    product: singleProduct
}
const ProductCard: FC<productCardType> = ({ id, image, rate, title, price, rateCount, category, product }) => {
    const { userCartProduct } = useAppSelector(state => state.userCart)
    const { deleteProduct, getProduct } = useProductActions()
    const productInCart = userCartProduct.find(product => product.id === id)
    const navigate = useNavigate()
    return (
        <div className='product__card'>
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="product__info">
                <h4 className="product__title"></h4>
                <p><b>Price:</b>{price}$</p>
                <Stars fontSize='small' rate={rate} />
                <p><b>Category:</b> {category} </p>
                <div className="buttons">
                    <button onClick={() => { productInCart ? deleteProduct(id) : getProduct(product) }}>
                        {productInCart ? "Remove from Cart" : "Add to Cart"}
                    </button>
                    <button onClick={() => navigate(`/products/${id}`)}>View More</button>
                </div>
            </div>
            <div className="rates">
                <div className='rates__container'>
                    <div className='icon'><AiFillHeart /></div>
                    <div className='data'>{rateCount}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard