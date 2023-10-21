import { FC } from 'react'
import './ProductsCategories.scss'
import { useGetProductsByCategory } from '../../hooks/useGetProdcutsByCategory'
import ProductCard from '../ProductCard'
import LoadingSpinner from '../LoadingSpinner'
type productsCategoriesType = {
    category: string,
    id: number
}
const ProductsCategories: FC<productsCategoriesType> = ({ category, id }) => {
    const { products, error, loading } = useGetProductsByCategory(category)
    return (
        <div className='products__categories'>
            {
                error
                    ?
                    <p>{error}</p>
                    :
                    (loading)
                        ?
                        <LoadingSpinner translateY={100} />
                        :
                        <div className='products__categories'>
                            <h1>Other Products With The Same Category</h1>

                            {
                                products
                                    .filter(p => p.id !== id)
                                    .slice(0, 2)
                                    .map((p, i) => <ProductCard
                                        category={p.category}
                                        id={p.id}
                                        image={p.image}
                                        price={p.price}
                                        title={p.title}
                                        rate={p.rating.rate}
                                        product={p}
                                        rateCount={p.rating.count}
                                        key={`category__${i}`}

                                    />)
                            }
                        </div>
                // 
            }
        </div>
    )
}

export default ProductsCategories