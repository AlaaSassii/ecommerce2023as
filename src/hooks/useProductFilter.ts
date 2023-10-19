import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { changeNameFilter, addCategoryFilter, changeRateFilter, priceMaxFilter, priceMinFilter, removeCategoryFilter } from "../redux/ProducFilterSlice";

export const useProductFilter = () => {
    const dispatch = useAppDispatch();
    const { nameFilter, categoryFilter, priceFilter, rateFilter } = useAppSelector(state => state.ProductFilter)

    const changeNameFilterFunction = (name: string) => {
        dispatch(changeNameFilter)
    }

    const addCategoryFilterFunction = (category: string) => {
        dispatch(addCategoryFilter(category))
    }

    const removeCategoryFilterFunction = (category: string) => {
        dispatch(removeCategoryFilter(category))
    }

    const changeRateFilterFunction = (rate: number) => {
        dispatch(changeRateFilter(rate))
    }

    const changeMaximumPriceFunction = (price: number) => {
        dispatch(priceMaxFilter(price))
    }

    const changeMinimumPriceFunction = (price: number) => {
        dispatch(priceMinFilter(price))
    }
    return { nameFilter, categoryFilter, priceFilter, rateFilter, changeNameFilterFunction, addCategoryFilterFunction, removeCategoryFilterFunction, changeRateFilterFunction, changeMaximumPriceFunction, changeMinimumPriceFunction }
}