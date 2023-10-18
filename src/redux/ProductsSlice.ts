import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Products } from "../types/Products";
import axios from "axios";

type initialStateType = {
    products: any | Products,
    loading: boolean,
    error: string,
}

const initialState: initialStateType = {
    products: undefined,
    loading: false,
    error: '',
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
    reducers: {},
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
