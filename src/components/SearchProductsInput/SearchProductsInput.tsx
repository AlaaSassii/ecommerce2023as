import { FC } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import './SearchProductsInput.scss'
type SearchProductsInputPropsType = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
const SearchProductsInput: FC<SearchProductsInputPropsType> = ({ value, handleChange }) => {
    return (
        <div className='input__search'>
            <input
                onChange={handleChange}
                type="text"
                value={value}
                placeholder='Search ..'
            />
            <button><BiSearchAlt2 /></button>
        </div>
    )
}

export default SearchProductsInput