import { FC } from 'react'
import Stars from '../Stars'

type PrpductInfoProps = {
    image: string,
    price: number,
    rate: number,
    title: string,
    description: string,
    category: string,
    id: number
}
const ProductInfo: FC<PrpductInfoProps> = ({ id, description, image, price, rate, title }) => {
    return (
        <div className='product__info'>
            <div className='product__image'>
                <img src={image} alt={title} />
            </div>
            <div className='info'>
                <p><b>Product Title:</b>{title}</p>
                <p><b>Product Price:</b>{price}$</p>
                <p><b>Product Description:</b>{description}</p>
                <div><b>Starts:</b> <Stars fontSize='large' rate={rate} /></div>
            </div>
        </div>
    )
}

export default ProductInfo