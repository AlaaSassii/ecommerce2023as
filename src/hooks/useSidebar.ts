import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { useAppSelector } from "./useAppSelector";
import { toggleFilterProductSidebar, toggleUserProductSidebar } from '../redux/sidebarsSlice'
import useWindowWidth from "./useWindowSize";
import { sidebarProductsFilterEnum } from '../enum/sidebarProductFilter';

export const useSideBar = () => {
    const dispatch = useDispatch();
    const { showUserProductsSideBar, showFilterProductSidebar } = useAppSelector(state => state.sidebars);
    const windowWidth = useWindowWidth();

    const toggleFilterProductSidebarFunction = () => {
        dispatch(toggleFilterProductSidebar())
    }
    const toggleUserProductSidebarFunction = () => {
        dispatch(toggleUserProductSidebar())
    }

    useEffect(() => {
        if (windowWidth <= 991 && showFilterProductSidebar) {
            toggleFilterProductSidebarFunction()
        } else {
            if (windowWidth >= 991 && showFilterProductSidebar === sidebarProductsFilterEnum.hide) {
                toggleFilterProductSidebarFunction()
            }
        }
    }, [windowWidth])
    return { showUserProductsSideBar, showFilterProductSidebar, toggleFilterProductSidebarFunction, toggleUserProductSidebarFunction }

}