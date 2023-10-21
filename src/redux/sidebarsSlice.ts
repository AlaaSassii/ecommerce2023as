import { createSlice } from '@reduxjs/toolkit';
import { sidebarProductsFilterEnum } from '../enum/sidebarProductFilter';
import { sidebarUserProductsEnum } from '../enum/sidebarUserProducts';

type initialStateType = {
    showFilterProductSidebar: sidebarProductsFilterEnum,
    showUserProductsSideBar: sidebarUserProductsEnum
}

const initialState: initialStateType = {
    showFilterProductSidebar: sidebarProductsFilterEnum.open,
    showUserProductsSideBar: sidebarUserProductsEnum.hide
}

const sidebarsSlice = createSlice({
    name: 'sidebars',
    initialState,
    reducers: {
        toggleFilterProductSidebar: (state) => {
            return { ...state, showFilterProductSidebar: state.showFilterProductSidebar === sidebarProductsFilterEnum.hide ? sidebarProductsFilterEnum.open : sidebarProductsFilterEnum.hide };
        },
        toggleUserProductSidebar: (state) => {
            return { ...state, showUserProductsSideBar: state.showUserProductsSideBar === sidebarUserProductsEnum.hide ? sidebarUserProductsEnum.open : sidebarUserProductsEnum.hide };
        },
        hideOpenFilterProductSidebar: (state) => {
            return { ...state, showFilterProductSidebar: sidebarProductsFilterEnum.hide };
        },
    }
})

export default sidebarsSlice.reducer;
export const { toggleFilterProductSidebar, toggleUserProductSidebar } = sidebarsSlice.actions
