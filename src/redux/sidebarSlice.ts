import { createSlice } from '@reduxjs/toolkit';
import { sidebarProductsFilterEnum } from '../enum/sidebarProductFilter';
import { sidebarUserProductsEnum } from '../enum/sidebarUserProducts';

type initialStateType = {
    showFilterProductSidebar: sidebarProductsFilterEnum,
    showUserProductsSideBar: sidebarUserProductsEnum
}

const initialState: initialStateType = {
    showFilterProductSidebar: sidebarProductsFilterEnum.hidden,
    showUserProductsSideBar: sidebarUserProductsEnum.hidden
}

const sidebarsSlice = createSlice({
    name: 'sidebars',
    initialState,
    reducers: {
        toggleFilterProductSidebar: (state) => {
            return { ...state, showFilterProductSidebar: state.showFilterProductSidebar === sidebarProductsFilterEnum.hidden ? sidebarProductsFilterEnum.open : sidebarProductsFilterEnum.hidden };
        },
        toggleUserProductSidebar: (state) => {
            return { ...state, showUserProductsSideBar: state.showUserProductsSideBar === sidebarUserProductsEnum.hidden ? sidebarUserProductsEnum.open : sidebarUserProductsEnum.hidden };
        },
    }
})

export default sidebarsSlice.reducer;
export const { toggleFilterProductSidebar, toggleUserProductSidebar } = sidebarsSlice.actions
