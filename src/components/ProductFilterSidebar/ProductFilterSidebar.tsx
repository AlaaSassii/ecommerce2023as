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
                <p>Use the search bar to find products easily</p>
                <SearchProductsInput handleChange={handleChange} value={nameFilter} />
                <p>Utilize a multi-range slider for precise price filtering of products.</p>
                <MultiRangeSlider />
                <p className='top__p'>Include a category button for streamlined product categorization and selection.</p>
                <CategoriesSelction categories={["men's clothing", "jewelery", "electronics", "women's clothing"]} />
                <p>Employ star ratings for efficient product evaluation and selection.</p>
                <RateSelction />
                {/*
                 */}
            </div>
        </div>
    )
}

export default ProductFilterSidebar