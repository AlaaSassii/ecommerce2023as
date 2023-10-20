import React from 'react'
import { useAppSelector } from '../hooks/useAppSelector'
import { useProductActions } from '../hooks/useProductActions'
import UserProductCard from '../components/UserProductCard'

const UserCart = () => {
    const { userCartProduct } = useAppSelector(state => state.userCart)
    return (
        <div className='user__cart'>
            {
                userCartProduct.map((p, index) => <UserProductCard
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
    )
}

export default UserCart