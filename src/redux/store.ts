import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from './ProductsSlice';
import CartReducer from './cartSlice';
import ProductFilterReducer from './ProducFilterSlice'
const store = configureStore({
    reducer: {
        products: ProductsReducer,
        userCart: CartReducer,
        ProductFilter: ProductFilterReducer

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
