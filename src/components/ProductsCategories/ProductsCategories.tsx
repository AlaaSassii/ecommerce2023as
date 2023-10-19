import { FC } from 'react'
import './ProductsCategories.scss'
import { useGetProductsByCategory } from '../../hooks/useGetProdcutsByCategory'
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
                    (loading || products.length === 0)
                        ?
                        <h1>loading</h1>
                        :
                        null
                // products.map((p, i) => )
            }
        </div>
    )
}

export default ProductsCategories