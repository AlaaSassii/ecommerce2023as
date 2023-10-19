import ReactStars from 'react-rating-stars-component'
import './RateSelction.scss'
const RateSelction = () => {
    const secondExample = {
        size: 30,
        count: 5,
        color: "black",
        activeColor: "gold",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (newValue: number | string) => {
            console.log(`Example 2: new value is ${newValue}`);
        }
    };
    return (
        <div className='rate__selction'>
            <ReactStars  {...secondExample} />
        </div>
    )
}

export default RateSelction