import { createSlice } from "@reduxjs/toolkit";
import { productUserCart, productsCart } from "../types/productsUserCart";
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from "../types/singleProduct";

type stateType = {
    userCartProduct: productsCart
    totalPrice: number
}

const initialState: stateType = {
    userCartProduct: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'userCart',
    initialState,
    reducers: {
        getNewProduct: (state, action: PayloadAction<Product>) => {
            return { ...state, userCartProduct: [...state.userCartProduct, action.payload], totalPrice: action.payload.price + state.totalPrice } as stateType
        },
        incrementProductAmount: (state, action: PayloadAction<Product>) => {
            return {
                userCartProduct: state.userCartProduct.map(p => {
                    if (p.id !== action.payload.id) return p
                    return { ...p, amount: p.amount + 1 }
                }),
                totalPrice: state.totalPrice + action.payload.price
            }
        },
        decrementProductAmount: (state, action: PayloadAction<productUserCart>) => {
            const product = action.payload;
            if (product.amount > 0)
        }


        //     incrementProductAmount: (state, action: PayloadAction<number>) => {
        //         state.userCartProduct = state.userCartProduct.map((product) => {
        //             if (product.id === action.payload) return { ...product, amount: product.amount + 1 }
        //             return product
        //         })
        //     },
        //     decrementProductAmount: (state, action: PayloadAction<number>) => {
        //         state.userCartProduct = state.userCartProduct.map((product) => {
        //             if (product.id === action.payload && product.amount > 0)=> {...product, amount: product.amount - 1}
        // })
        //     }
    }
})