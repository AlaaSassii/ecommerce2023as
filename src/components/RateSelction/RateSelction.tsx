import { Rating } from '@mui/material'

import './RateSelction.scss'
const RateSelction = () => {

    return (
        <div className='rate__selction'>
            <Rating
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
                onChange={(event, newValue) => {
                    console.log(newValue);
                }}
            />
        </div>
    )
}

export default RateSelction