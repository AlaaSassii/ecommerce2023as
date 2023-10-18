import { useEffect } from 'react'
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"
import { getAllProducts } from '../redux/ProductsSlice'
const useGetAllProducts = () => {
    const dispatch = useAppDispatch();
    const { loading, error, products } = useAppSelector(state => state.products)

    useEffect(() => {
        if (products?.length > 0 || products === undefined) {
            dispatch(getAllProducts())
        }
    }, [])
    return { loading, error, products }
}

export default useGetAllProducts