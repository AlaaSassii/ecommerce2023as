import { useState } from 'react'
import { useAppSelector } from '../hooks/useAppSelector'
import UserProductCard from '../components/UserProductCard'
import { Container } from '@mui/material';
import { calculateTotalAmount } from '../helper/calculateTotalAmount';
import { calculateTotalPrice } from '../helper/calculateTotalPrice';
import { formatNumber } from '../helper/formatNumber';
import ErrorNoProduct from '../components/ErrorNoProduct';
import '../scss/UserCart.scss'

const UserCart = () => {
    const { userCartProduct } = useAppSelector(state => state.userCart)
    const [left, setLeft] = useState(25)
    return (
        <Container>
            <div className='user__cart__container'>
                <div className='user__cart'>
                    {
                        userCartProduct.length
                            ?
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
                            :
                            <ErrorNoProduct left={left} />

                    }
                </div>
                <div className='total__Shoping__cart'>
                    <div>
                        <div><p>{calculateTotalAmount(userCartProduct)} item(s)</p><p>${formatNumber(calculateTotalPrice(userCartProduct))}</p></div>
                        <div><p>Shiping</p><p>$26.00</p></div>
                        <a>Have a promo Code?</a>
                    </div>
                    <hr />
                    <div>
                        <div><p>Total: </p> <p>${formatNumber(calculateTotalPrice(userCartProduct) + 26)}</p></div>
                        <div><p>Taxes</p><p>$30.00</p></div>
                        <div><p>Total</p><p>${formatNumber(calculateTotalPrice(userCartProduct) + 256)}</p></div>
                    </div>
                    <hr />
                    <button>Checkout</button>
                </div>
            </div>
        </Container>
    )
}

export default UserCart