import { useDispatch } from "react-redux"
import { useAppSelector } from "./useAppSelector";
import { toggleFilterProductSidebar, toggleUserProductSidebar } from '../redux/sidebarsSlice'

export const useSideBar = () => {
    const dispatch = useDispatch();
    const { showUserProductsSideBar, showFilterProductSidebar } = useAppSelector(state => state.sidebars);
    const toggleFilterProductSidebarFunction = () => {
        dispatch(toggleFilterProductSidebar)
    }
    const toggleUserProductSidebarFunction = () => {
        dispatch(toggleUserProductSidebar)
    }
    return { showUserProductsSideBar, showFilterProductSidebar, toggleFilterProductSidebarFunction, toggleUserProductSidebarFunction }

}