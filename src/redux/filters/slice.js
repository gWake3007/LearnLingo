import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  languageOfInstruction: '',
  studentsLevel: '',
  pricePerHour: '',
  rating: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLanguageOfInstruction: (state, { payload }) => {
      state.languageOfInstruction = payload ?? '';
    },
    setStudentsLevel: (state, { payload }) => {
      state.studentsLevel = payload ?? '';
    },
    setPricePerHour: (state, { payload }) => {
      state.pricePerHour = payload ?? '';
    },
    setRating: (state, { payload }) => {
      state.rating = payload ?? '';
    },
  },
});

export const {
  setLanguageOfInstruction,
  setStudentsLevel,
  setPricePerHour,
  setRating,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
