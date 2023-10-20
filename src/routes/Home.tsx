import '../scss/Home.scss'
const Home = () => {
    return (
        <>
            <section className='welcome__section'>
                <div className="content">
                    <h1>Welcome to Our E-Commerce website</h1>
                    <p>Welcome to Our E-Commerce Website! Discover a world of shopping convenience and endless possibilities.</p>
                    <p>Find the finest products, exclusive deals, and outstanding service. Start exploring and enjoy a remarkable shopping experience!</p>
                    <p>Thank you for choosing us as your preferred online shopping destination. Happy shopping!</p>
                    <div className="buttons">
                        <button type="button">Browse Products</button>
                        <button className="shop__btn">Shop Now</button>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home