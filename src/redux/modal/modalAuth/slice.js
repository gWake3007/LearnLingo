import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalType: null, //Register or Login
};

const modalAuthSlice = createSlice({
  name: 'modalAuth',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      // const type = payload?.modalType || 'Login';
      state.isOpen = true;
      state.modalType = payload.modalType; //Register or Login
    },
    closeModal: state => {
      state.isOpen = false;
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = modalAuthSlice.actions;
export const modalAuthReducer = modalAuthSlice.reducer;
