import { useProductFilter } from '../../hooks/useProductFilter'
import CategoriesSelction from '../CategoriesSelction'
import MultiRangeSlider from '../MultiRangeSlider'
import RateSelction from '../RateSelction'
import SearchProductsInput from '../SearchProductsInput'
import './ProductFilterSidebar.scss'
const ProductFilterSidebar = () => {
    const { changeNameFilterFunction, nameFilter, } = useProductFilter()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeNameFilterFunction(event.target.value)
    }

    return (
        <div className='product__filter_Sidebar'>
            <div className="sidebar__info">
                <h1 className="title">Customize Your Product View</h1>
                <p><b>Customize Your Product View</b> sidebar lets you fine-tune your product search. Easily customize your results by selecting filters that match your preferences.</p>
            </div>
            <div className='filters'>
                <RateSelction />
                <CategoriesSelction categories={["men's clothing", "jewelery", "electronics", "women's clothing"]} />
                <SearchProductsInput handleChange={handleChange} value={nameFilter} />
                <MultiRangeSlider />
                {/*
                 */}
            </div>
        </div>
    )
}

export default ProductFilterSidebar