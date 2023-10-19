import { FC } from 'react'
import { TbStarHalfFilled, TbStarFilled } from 'react-icons/tb'
import { generateStarArray } from '../../helper/generateStarArray'
import './Stars.scss'
type StarsPropsType = {
    rate: number
}
const Stars: FC<StarsPropsType> = ({ rate }) => {
    return (
        <div className='product_rate'>
            {
                generateStarArray(rate)
                    .map((star, index) => {
                        if (star === 'S') return <TbStarFilled className="star__true" />
                        if (star === 'H') return <TbStarHalfFilled className="star__true" />
                        if (star === 'E') return <TbStarFilled className="star__false" />
                    })
            }
        </div>
    )
}

export default Stars