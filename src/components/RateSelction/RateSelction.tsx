import { Rating } from '@mui/material'
import { useProductFilter } from '../../hooks/useProductFilter'
import './RateSelction.scss'
const RateSelction = () => {
    const { changeRateFilterFunction, rateFilter } = useProductFilter();
    return (
        <div className='rate__selction'>
            <Rating
                name="half-rating"
                defaultValue={rateFilter || 0}
                precision={0.5}
                onChange={(event, newValue) => {
                    console.log(event)
                    changeRateFilterFunction(newValue || 0);
                }}
            />
        </div>
    )
}

export default RateSelction