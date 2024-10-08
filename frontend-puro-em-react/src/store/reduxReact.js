import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: 'MERCEDES',
  fuelLabel: 'Combustivel',
};


const reduxReact = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    changeBrand(state, action) {
      state.brand = action.payload;
    },
    toggleFuelLabel(state) {
      state.fuelLabel = state.fuelLabel === 'Combustivel'
        ? 'QUAL COMBUSTIVEL TU PREFERE?'
        : 'Combustivel';
    },
  },
});

export const { changeBrand, toggleFuelLabel } = reduxReact.actions;
export default reduxReact.reducer;