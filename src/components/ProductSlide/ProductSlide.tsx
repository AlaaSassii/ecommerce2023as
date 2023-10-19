
import { FC } from 'react'
import { useProductActions } from '../../hooks/useProductActions';

import { FiPlus } from 'react-icons/fi';
import { RiSubtractFill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import './ProductSlide.scss'

type productSlidePropsType = {
    image: string,
    title: string,
    amount: number,
    id: number
}
const ProductSlide: FC<productSlidePropsType> = ({ id, image, title, amount }) => {
    const { decrementAmout, deleteProduct, incrementAmout } = useProductActions()

    return (
        <div className='product__slide'>
            <button onClick={() => deleteProduct(id)}><AiOutlineClose /></button>
            <div className='image'>
                <img src={image} alt="" />
            </div>
            <div className='product__slide__info'>
                <h6 className='title'>{title}</h6>
                <div className='product__amount'>
                    <button onClick={() => decrementAmout(id)}><RiSubtractFill /></button>
                    <div><b>{amount}</b></div>
                    <button onClick={() => incrementAmout(id)}><FiPlus /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductSlide