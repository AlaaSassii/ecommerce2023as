import { FC } from 'react'
import './CategoriesSelction.scss'
import { useProductFilter } from '../../hooks/useProductFilter'
type categoriesSelctionPropsType = {
    categories: string[]
}
const CategoriesSelction: FC<categoriesSelctionPropsType> = ({ categories }) => {
    const { addCategoryFilterFunction, removeCategoryFilterFunction, categoryFilter } = useProductFilter()
    return (
        <div className='categories__selection__container'>
            {
                categories.map((c) =>
                    <button
                        onClick={() => { categoryFilter.includes(c) ? removeCategoryFilterFunction(c) : addCategoryFilterFunction(c) }}>
                        {c}
                    </button>
                )
            }
        </div >
    )
}

export default CategoriesSelction