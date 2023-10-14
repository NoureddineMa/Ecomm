import { configureStore } from "@reduxjs/toolkit";
import ProdutReducer from './features/ProductsSlice'

export const store = configureStore({
    reducer: {
        products : ProdutReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
