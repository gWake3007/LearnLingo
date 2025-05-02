import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  teacherId: null,
};

const modalTeacherSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.teacherId = payload.teacherId;
    },
    closeModal: state => {
      state.isOpen = false;
      state.teacherId = null;
    },
  },
});

export const { openModal, closeModal } = modalTeacherSlice.actions;
export const modalTeacherReducer = modalTeacherSlice.reducer;
