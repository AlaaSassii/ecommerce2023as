import { FC } from 'react';
import './ErrorNoProduct.scss';
import noProductFound from '../../assets/no-products-found.png'

type ErrorNoProductType = {
    left?: number
    top?: number
    x?: number,
    y?: number
}

const ErrorNoProduct: FC<ErrorNoProductType> = ({ left, top, x, y }) => {
    const cutomErrorProductStyle = {
        left: left || '50%',
        top: top || '50%',
        transform: `translate(${x || 0}, ${y || 0})`
    };
    return (
        <div style={cutomErrorProductStyle} className='error__no__product' >
            <h3>there is no product</h3>
            <img src={noProductFound} alt="" />
        </div >
    )
}

export default ErrorNoProduct