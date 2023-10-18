import { createSlice } from "@reduxjs/toolkit";
import { productsCart } from "../types/productsCart";
import type { PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
    userCartProduct: productsCart
    totalPrice: number
}

const initialState: initialStateType = {
    userCartProduct: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrementProductAmount: (state, action: PayloadAction<number>) => {
            state.userCartProduct = state.userCartProduct.map((product) => {
                if (product.id === action.payload) return { ...product, amount: product.amount + 1 }
                return product
            })
        }
    }
})