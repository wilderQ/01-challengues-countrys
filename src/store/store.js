import { configureStore } from "@reduxjs/toolkit";
import { countrysSlice } from "./countrys/countrysSlice";
import { uiSlice } from "./ui/uislice";


export const store = configureStore({
    reducer:{
        countrys: countrysSlice.reducer,
        ui: uiSlice.reducer
    }
})