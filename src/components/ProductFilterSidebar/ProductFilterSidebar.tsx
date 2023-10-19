import { useProductFilter } from '../../hooks/useProductFilter'
import './ProductFilterSidebar.scss'
const ProductFilterSidebar = () => {
    const { addCategoryFilterFunction, categoryFilter, changeMaximumPriceFunction, changeMinimumPriceFunction, changeNameFilterFunction, changeRateFilterFunction, nameFilter, priceFilter, rateFilter, removeCategoryFilterFunction } = useProductFilter()

    return (
        <div className='product__filter_Sidebar'>
            <div className="sidebar__info">
                <h1 className="title"></h1>
                <p></p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ProductFilterSidebar