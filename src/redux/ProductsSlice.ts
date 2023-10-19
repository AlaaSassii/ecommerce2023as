import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Products } from "../types/products";
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

type initialStateType = {
    products: undefined | Products,
    loading: boolean,
    error: string,
    searchProductName: string

}

const initialState: initialStateType = {
    products: undefined,
    loading: false,
    error: '',
    searchProductName: ''
}

export const getAllProducts = createAsyncThunk('products/products',
    async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products`);
            const newData = response.data;
            return newData;
        } catch (error) {
            throw error;
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeSearchProductName: (state, action: PayloadAction<string>) => {
            const name = action.payload
            return { ...state, searchProductName: name }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = '';
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred.';
            });
    }
})

export default productsSlice.reducer;
export const { changeSearchProductName } = productsSlice.actions
