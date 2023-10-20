import Container from "../components/Container"
import ProductCard from "../components/ProductCard"
import ProductFilterSidebar from "../components/ProductFilterSidebar/ProductFilterSidebar"
import { transformNumber } from "../helper/transformNumber"
import useGetAllProducts from "../hooks/useGetAllProducts"
import { useProductFilter } from "../hooks/useProductFilter"
import '../scss/Products.scss'
const Products = ({ }) => {
    const { products, loading, error, } = useGetAllProducts()
    const { nameFilter, priceFilter, rateFilter, categoryFilter } = useProductFilter()
    const filteredProducts = products
        ?.filter(p => p.title.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase()))
        ?.filter(p => p.price >= priceFilter.min && p.price <= priceFilter.max)
        ?.filter(p => categoryFilter.includes(p.category))
        ?.filter(p => transformNumber(p.rating.rate.toString()) >= (rateFilter || 0))
    return (
        <>
            <Container>
                <div className="products__contaienr">

                    {
                        error
                            ?
                            <h1>{error}</h1>
                            :
                            (loading || !filteredProducts)
                                ?
                                <h1>Loading...</h1>
                                :
                                filteredProducts
                                    .map((p) =>
                                        <ProductCard
                                            category={p.category}
                                            id={p.id}
                                            image={p.image}
                                            price={p.price}
                                            product={p}
                                            rate={p.rating.rate}
                                            rateCount={p.rating.count}
                                            title={p.title}
                                            key={`product__${p.id}`}
                                        />)

                    }
                </div>
            </Container>
            <ProductFilterSidebar />
        </>

    )
}

export default Products