import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "./slices/basketSlice"

//Store for Redux

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    }
})