import { FC } from 'react'
import './CategoriesSelction.scss'
type categoriesSelctionPropsType = {
    categories: string[]
}
const CategoriesSelction: FC<categoriesSelctionPropsType> = ({ categories }) => {
    return (
        <div className='categories__selection__container'>
            {
                categories.map((categorie) => <button key={categorie}>{categories}</button>)
            }
        </div>
    )
}

export default CategoriesSelction