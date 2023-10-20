import { FC } from 'react'
import './ProductsCategories.scss'
import { useGetProductsByCategory } from '../../hooks/useGetProdcutsByCategory'
import ProductCard from '../ProductCard'
type productsCategoriesType = {
    category: string
}
const ProductsCategories: FC<productsCategoriesType> = ({ category }) => {
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
                        <h1>loading</h1>
                        :
                        products
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
                // 
            }
        </div>
    )
}

export default ProductsCategories