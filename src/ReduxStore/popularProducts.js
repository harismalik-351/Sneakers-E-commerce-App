import {createSlice} from '@reduxjs/toolkit';
import data from '../constants/data.json';
const initialState = {
  product: data,
  selectedPopular: null,
};

export const popularProductSlice = createSlice({
  name: 'popularProducts',
  initialState,
  reducers: {
    setSelectedPopular: (action, state) => {
      const popularId = action.payload;
      state.selectedPopular = state.product.find(p => p.id === popularId);
    },
  },
});
