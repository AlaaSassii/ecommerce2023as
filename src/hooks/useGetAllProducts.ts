import { useEffect } from 'react'
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"
import { getAllProducts } from '../redux/ProductsSlice'
const useGetAllProducts = () => {
    const dispatch = useAppDispatch();
    const { loading, error, products, searchProductName } = useAppSelector(state => state.products)

    useEffect(() => {
        if (products === undefined) {
            dispatch(getAllProducts())
        }
    }, [])
    return { loading, error, products, searchProductName }
}

export default useGetAllProducts