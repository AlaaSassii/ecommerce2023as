import { FC } from 'react'
import { TbStarHalfFilled, TbStarFilled } from 'react-icons/tb'
import { generateStarArray } from '../../helper/generateStarArray'
import './Stars.scss'

type StarsPropsType = {
    rate: number
    fontSize: string
}
const Stars: FC<StarsPropsType> = ({ rate, fontSize }) => {
    return (
        <div className='product_rate'>
            {
                generateStarArray(rate)
                    .map((star, index) => {
                        if (star === 'H') return <TbStarHalfFilled style={{ fontSize }} key={`star__${index}`} className="star__true" />
                        if (star === 'E') return <TbStarFilled style={{ fontSize }} key={`star__${index}`} className="star__false" />
                        if (star === 'S') return <TbStarFilled style={{ fontSize }} key={`star__${index}`} className="star__true" />
                    })
            }
        </div>
    )
}

export default Stars