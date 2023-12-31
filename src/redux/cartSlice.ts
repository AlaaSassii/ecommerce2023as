import { createSlice } from "@reduxjs/toolkit";
import { productsUserCart } from "../types/productsUserCart";
import { singleProduct } from "../types/singleProduct";
import type { PayloadAction } from '@reduxjs/toolkit'

type stateType = {
    userCartProduct: productsUserCart,
}

const initialState: stateType = {
    userCartProduct: [],
}

const cartSlice = createSlice({
    name: 'userCart',
    initialState,
    reducers: {
        // id
        getNewProduct: (state, action: PayloadAction<singleProduct>) => {
            const product = action.payload
            if (state.userCartProduct.find(p => p.id === product.id)) return state
            return {
                ...state, userCartProduct: [...state.userCartProduct, { ...product, amount: 1 }]
            }
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const id = action.payload
            return {
                ...state, userCartProduct: state.userCartProduct.filter(v => v.id !== id)
            }
        },
        incrementProductAmount: (state, action: PayloadAction<number>) => {
            const id = action.payload
            return {
                ...state, userCartProduct: state.userCartProduct.map(p => {
                    if (p.id !== id) return p
                    return { ...p, amount: p.amount + 1 }
                })
            }
        },
        decrementProductAmount: (state, action: PayloadAction<number>) => {
            const id = action.payload
            const product = state.userCartProduct.find(v => v.id === id);
            if (product?.amount as number > 1) return {
                ...state, userCartProduct: state.userCartProduct.map(v => {
                    if (v.id !== id) return v
                    return { ...v, amount: v.amount - 1 }
                })
            }
            else {
                return {
                    ...state, userCartProduct: state.userCartProduct.filter(v => v.id !== id)
                }
            }
        },
    }
}
)

export default cartSlice.reducer
export const { getNewProduct, removeProduct, incrementProductAmount, decrementProductAmount } = cartSlice.actions