import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Aquí podrías añadir más acciones, como filtrar o buscar productos
  }
});

export const selectProducts = (state) => state.products;
export default productSlice.reducer;