import ProductInfo from '../components/ProductInfo/ProductInfo'
import { useParams } from 'react-router-dom'
import useGetSingleProduct from '../hooks/useGetSingleProduct';
import { Container } from '@mui/material';
import ErrorNoProduct from '../components/ErrorNoProduct';
import ProductsCategories from '../components/ProductsCategories';
import '../scss/ProductsInfo.scss'
import { useEffect } from 'react'
import LoadingSpinner from '../components/LoadingSpinner';
const ProductsInfo = () => {
    const { id } = useParams();
    const { product, error, loading, getProductInfo } = useGetSingleProduct(id || '');
    useEffect(() => {
        getProductInfo(id || "")
    }, [id])
    return (
        <Container>
            {
                error
                    ?
                    <ErrorNoProduct />
                    :
                    <div className='productinfo__view'>
                        {
                            !product
                                ?
                                <ErrorNoProduct x={-50} y={20} />
                                :
                                loading
                                    ?
                                    <LoadingSpinner absolute={true} />
                                    :
                                    <>
                                        <ProductInfo
                                            product={product}
                                            category={product.category}
                                            description={product.description}
                                            id={product.id}
                                            image={product.image}
                                            price={product.price}
                                            rate={product.rating.rate}
                                            title={product.title}
                                        />
                                        <ProductsCategories
                                            category={product.category}
                                            id={product.id}
                                        />
                                    </>
                        }
                    </div>
            }
        </Container>
        // <ProductInfo />
    )
}

export default ProductsInfo