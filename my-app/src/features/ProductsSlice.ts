import { createSlice } from '@reduxjs/toolkit'
  
const initialState = [{
    id: '',
    Title : '',
    Image : '',
    Price: '',
    Quantity : 1,
    Selected: false,
}]

const ProductsSlice =  createSlice({
    name: 'Products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingProductIndex = state.findIndex(product => product.Title === "");
            if (existingProductIndex !== -1) {
              state[existingProductIndex] = action.payload;
            } else {
              state.push(action.payload);
            }
        },
        removeProductById: (state, action) => {
            const idToRemove = action.payload;
            return state.filter(product => product.id !== idToRemove);
          },
        incrementQuantity: (state, action) => {
            const productToIncrement = state.find(
              (product) => product.id === action.payload
            );
            if (productToIncrement) {
              productToIncrement.Quantity++;
            }
          },
        decrementQuantity: (state, action) => {
            const productToDecrement = state.find(
              (product) => product.id === action.payload
            );
            if (productToDecrement && productToDecrement.Quantity > 1) {
              productToDecrement.Quantity--;
            }
          },
    }
})

export const { addProduct , removeProductById , incrementQuantity , decrementQuantity } = ProductsSlice.actions
export default ProductsSlice.reducer