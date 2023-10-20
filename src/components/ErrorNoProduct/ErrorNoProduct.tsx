import React from 'react'
import './ErrorNoProduct.scss';
import noProductFound from '../../assets/no-products-found.png'

const ErrorNoProduct = () => {
    return (
        <div>
            <h3>there is no user product</h3>
            <img src={noProductFound} alt="" />
        </div>
    )
}

export default ErrorNoProduct