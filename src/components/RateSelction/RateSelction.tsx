import { Rating } from '@mui/material'
import { useProductFilter } from '../../hooks/useProductFilter'
import './RateSelction.scss'
const RateSelction = () => {
    const { changeRateFilterFunction } = useProductFilter();
    return (
        <div className='rate__selction'>
            <Rating
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
                onChange={(event, newValue) => {
                    changeRateFilterFunction(newValue || 0);
                }}
            />
        </div>
    )
}

export default RateSelction