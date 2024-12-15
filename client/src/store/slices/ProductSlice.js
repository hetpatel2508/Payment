import { createSlice } from '@reduxjs/toolkit';

const calculateTotalAmount = (products) => {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
};

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    TotalAmount: 0,
    TotalQuantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find((product) => product.id === newProduct.id);

      if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity+newProduct.quantity; // Update quantity if product exists
        
      } else {
        state.products.push(newProduct); // Add new product to the cart
      }

      state.TotalAmount = calculateTotalAmount(state.products); // Recalculate total
      state.TotalQuantity = state.products.reduce((total, product) => total + product.quantity, 0);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
      state.TotalAmount = calculateTotalAmount(state.products);
      state.TotalQuantity = state.products.reduce((total, product) => total + product.quantity, 0);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity = quantity; // Update product quantity
        state.TotalAmount = calculateTotalAmount(state.products); // Recalculate total
        state.TotalQuantity = state.products.reduce((total, product) => total + product.quantity, 0);
      }
    },
  },
});

export const { addProduct, removeProduct, updateQuantity } = productSlice.actions;
export default productSlice.reducer;
