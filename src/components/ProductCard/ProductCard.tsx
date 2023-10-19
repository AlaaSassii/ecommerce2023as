import { FC } from 'react'
import Stars from '../Stars'
import './ProductCard.scss'
import { AiFillHeart } from 'react-icons/ai'
type productCardType = {
    id: number,
    image: string,
    rate: number,
    title: string,
    price: number,
    rateCount: number
    category: string
}
const ProductCard: FC<productCardType> = ({ id, image, rate, title, price, rateCount, category }) => {
    return (
        <div className='product__cart'>
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="product__info">
                <h4 className="product__title"></h4>
                <p><b>Price</b>{price}$</p>
                <Stars fontSize='small' rate={rate} />
                <p><b>Category:</b> {category} </p>
                <button>Add to Cart</button>
            </div>
            <div className="rates">
                <div className='icon'><AiFillHeart /></div>
            </div>
        </div>
    )
}

export default ProductCard