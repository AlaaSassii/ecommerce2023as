import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    nameFilter: string,
    rateFilter: number | null,
    categoryFilter: string[],
    priceFilter: { min: number, max: number }
}

const initialState: initialStateType = {
    nameFilter: '',
    rateFilter: null,
    categoryFilter: ["men's clothing", "jewelery", "electronics", "women's clothing"],
    priceFilter: { min: 0, max: 700 },
}

const productFilterSlice = createSlice({
    name: 'productFilter',
    initialState,
    reducers: {
        changeNameFilter: (state, action: PayloadAction<string>) => {
            return { ...state, nameFilter: action.payload }
        },
        changeRateFilter: (state, action: PayloadAction<number>) => {
            return { ...state, rateFilter: action.payload }
        },
        addCategoryFilter: (state, action: PayloadAction<string>) => {
            return { ...state, categoryFilter: [...state.categoryFilter, action.payload] }
        },
        removeCategoryFilter: (state, action: PayloadAction<string>) => {
            return { ...state, categoryFilter: state.categoryFilter.filter(c => c !== action.payload) }
        },
        priceMinFilter: (state, action: PayloadAction<number>) => {
            return { ...state, priceFilter: { ...state.priceFilter, min: action.payload } }
        },
        priceMaxFilter: (state, action: PayloadAction<number>) => {
            return { ...state, priceFilter: { ...state.priceFilter, max: action.payload } }
        },
    }
})

export default productFilterSlice.reducer;
export const { changeNameFilter, changeRateFilter, addCategoryFilter, removeCategoryFilter, priceMinFilter, priceMaxFilter } = productFilterSlice.actions