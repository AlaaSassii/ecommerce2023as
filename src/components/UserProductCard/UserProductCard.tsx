import { FC } from 'react'
import './UserProduct.scss'
import { productUserCart } from '../../types/productsUserCart'
import { FiPlus } from 'react-icons/fi';
import { RiSubtractFill } from 'react-icons/ri'
import Stars from '../Stars'
import { useProductActions } from '../../hooks/useProductActions';

const UserProductCard: FC<productUserCart> = ({ amount, description, id, image, price, rating, title }) => {
    const { decrementAmout, incrementAmout } = useProductActions()
    return (
        <div className='user__product__card'>
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className='info'>
                <p><b>Product Title:</b>{title}</p>
                <p><b>Product Description:</b>{description}</p>
                <p><b>Product Price:</b>{price}$</p>
                <div><b>Starts:</b> <Stars fontSize='medium' rate={rating.rate} /></div>
                <div className='product__amount'>
                    <button onClick={() => decrementAmout(id)}><RiSubtractFill /></button>
                    <div>{amount}</div>
                    <button onClick={() => incrementAmout(id)}><FiPlus /></button>
                </div>
                <button onClick={() => console.log(id)}>View More</button>
            </div>
        </div>
    )
}

export default UserProductCard