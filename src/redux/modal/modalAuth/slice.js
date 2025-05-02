import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalType: null, //Register or Login
};

const modalAuthSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.modalType = payload.type; //Register or Login
    },
    closeModal: state => {
      state.isOpen = false;
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = modalAuthSlice.actions;
export const modalAuthReducer = modalAuthSlice.reducer;
