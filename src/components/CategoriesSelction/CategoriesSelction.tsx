import { FC } from 'react'
import './CategoriesSelction.scss'
import { useProductFilter } from '../../hooks/useProductFilter'
type categoriesSelctionPropsType = {
    categories: string[]
}
const CategoriesSelction: FC<categoriesSelctionPropsType> = ({ categories }) => {
    const { addCategoryFilterFunction } = useProductFilter()
    return (
        <div className='categories__selection__container'>
            {
                categories.map((c) =>
                    <button
                        onClick={() => addCategoryFilterFunction(c)}>
                        {c}
                    </button>
                )
            }
        </div >
    )
}

export default CategoriesSelction