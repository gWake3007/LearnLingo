import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers, fetchTeacherById } from './operators.js';

const initialState = {
  teachersItem: [],
  loading: false,
  error: null,
  selectedTeacher: null,
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    setSelectedTeacher: (state, { payload }) => {
      state.selectedTeacher = payload;
    },
  },
  extraReducers: builder => {
    builder
      //? Take all teachers
      .addCase(fetchTeachers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.teachersItem = payload;
      })
      .addCase(fetchTeachers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      //? Take teacher
      .addCase(fetchTeacherById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeacherById.fulfilled, (state, { payload }) => {
        state.loading = false;
        const exists = state.teachersItem.find(item => item.id === payload.id);
        if (!exists) {
          state.teachersItem.push(payload);
        }
      })
      .addCase(fetchTeacherById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setSelectedTeacher } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
