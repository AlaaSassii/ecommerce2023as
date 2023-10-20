import { FC } from 'react'
import './UserProductCard.scss'
import { FiPlus } from 'react-icons/fi';
import { RiSubtractFill } from 'react-icons/ri'
import Stars from '../Stars'
import { useProductActions } from '../../hooks/useProductActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import { singleProduct } from '../../types/singleProduct';

type UserProductCardType = {
    amount: number,
    description: string,
    image: string,
    price: number,
    rate: number,
    title: string,
    id: number
    product: singleProduct
}

const UserProductCard: FC<UserProductCardType> = ({ product, amount, id, image, price, rate, title, description }) => {
    const { decrementAmout, incrementAmout, deleteProduct, getProduct } = useProductActions()
    const { userCartProduct } = useAppSelector(state => state.userCart)
    const productInCart = userCartProduct.find(product => product.id === id)
    const navigate = useNavigate()
    return (
        <div className='user__product__card'>
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className='info'>
                <p><b>Product Title:</b>{title}</p>
                <p><b>Product Price:</b>{price}$</p>
                <p><b>Product description:</b>{description}</p>
                <p><b>Starts:</b> <Stars fontSize='medium' rate={rate} /></p>
                <div className='product__amount'>
                    <button onClick={() => decrementAmout(id)}><RiSubtractFill /></button>
                    <div>{amount}</div>
                    <button onClick={() => incrementAmout(id)}><FiPlus /></button>
                </div>
                <div className="buttons">
                    <button className='add_to_cart__btn' onClick={() => { productInCart ? deleteProduct(id) : getProduct(product) }}>
                        {productInCart ? "Remove from Cart" : "Add to Cart"}
                    </button>
                    <button className='view__moew__btn' onClick={() => navigate(`/products/${id}`)}>View More</button>
                </div>
            </div>
        </div>
    )
}

export default UserProductCard