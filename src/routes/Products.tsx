import Container from "../components/Container"
import ProductCard from "../components/ProductCard"
import useGetAllProducts from "../hooks/useGetAllProducts"
import '../scss/Products.scss'
const Products = ({ }) => {
    const { products, loading, error, } = useGetAllProducts()
    return (
        <>
            <Container>
                {
                    error
                        ?
                        <h1>{error}</h1>
                        :
                        (loading || !products)
                            ?
                            <h1>Loading...</h1>
                            :
                            <div className="products__contaienr">
                                {products.map((p) =>
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
                                    />)}
                            </div>

                }
            </Container>
        </>

    )
}

export default Products