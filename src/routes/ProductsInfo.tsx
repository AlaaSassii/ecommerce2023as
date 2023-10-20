import React from 'react'
import ProductInfo from '../components/ProductInfo/ProductInfo'
import { useParams } from 'react-router-dom'
import useGetSingleProduct from '../hooks/useGetSingleProduct';
import { Container } from '@mui/material';
import ErrorNoProduct from '../components/ErrorNoProduct';

const ProductsInfo = () => {
    const { id } = useParams();
    const { product, error, loading } = useGetSingleProduct(id || '')
    return (
        <Container>
            {
                error
                    ?
                    <ErrorNoProduct />
                    :
                    (loading || !product)
                        ?
                        <h1>Loading..</h1>
                        :
                        <>
                            <ProductInfo
                                product={product}
                                category={product.category}
                                description={product.category}
                                id={product.id}
                                image={product.image}
                                price={product.price}
                                rate={product.rating.rate}
                                title={product.title}
                            />
                        </>
            }
        </Container>
        // <ProductInfo />
    )
}

export default ProductsInfo