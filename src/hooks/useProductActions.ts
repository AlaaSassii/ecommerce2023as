import { decrementProductAmount, getNewProduct, incrementProductAmount, removeProduct } from "../redux/cartSlice";
import { singleProduct } from "../types/singleProduct";
import { useAppDispatch } from "./useAppDispatch";


export const useProductActions = () => {
    const dispatch = useAppDispatch();

    const getProduct = (product: singleProduct) => {
        dispatch(getNewProduct(product))
    }

    const deleteProduct = (id: number) => {
        dispatch(removeProduct(id))
    }

    const incrementAmout = (id: number) => {
        dispatch(incrementProductAmount(id))
    }

    const decrementAmout = (id: number) => {
        dispatch(decrementProductAmount(id))
    }

    return { getProduct, deleteProduct, incrementAmout, decrementAmout }
}