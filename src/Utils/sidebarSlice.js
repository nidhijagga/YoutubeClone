import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState:{
        isOpen : false
    },
    reducers: {
        toggleSidebar : (state) => {
            state.isOpen=!state.isOpen;
        },
        closeMenu : (state) => {
            state.isOpen = false;
        } 
    }
})
export const {toggleSidebar, closeMenu} = sidebarSlice.actions;
export default sidebarSlice.reducer;