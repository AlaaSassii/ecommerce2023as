import { useAppSelector } from '../hooks/useAppSelector'
import UserProductCard from '../components/UserProductCard'
import { Container } from '@mui/material';
import '../scss/UserCart.scss'

const UserCart = () => {
    const { userCartProduct } = useAppSelector(state => state.userCart)
    return (
        <Container>
            <div className='user__cart__container'>
                <div className='user__cart'>
                    {
                        userCartProduct.map((p, index) => <UserProductCard
                            product={p}
                            amount={p.amount}
                            description={p.description}
                            id={p.id}
                            image={p.image}
                            price={p.price}
                            rate={p.rating.rate}
                            title={p.title}
                            key={`${index}__product_user_cart`}
                        />)

                    }
                </div>
                <div className='total__Shoping__cart'>

                </div>
            </div>
        </Container>
    )
}

export default UserCart