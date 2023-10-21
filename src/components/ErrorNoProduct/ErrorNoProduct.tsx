import { FC } from 'react';
import './ErrorNoProduct.scss';
import noProductFound from '../../assets/no-products-found.png'

type ErrorNoProductType = {
    left?: number
}

const ErrorNoProduct: FC<ErrorNoProductType> = ({ left }) => {
    return (
        <div style={left ? { left } : {}} className='error__no__product'>
            <h3>there is no product</h3>
            <img src={noProductFound} alt="" />
        </div>
    )
}

export default ErrorNoProduct