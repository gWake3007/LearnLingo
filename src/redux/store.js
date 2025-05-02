import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice.js';
import { teachersReducer } from './teachers/slice.js';
import { filtersReducer } from './filters/slice.js';
import { modalAuthReducer } from './modal/modalAuth/slice.js';
import { modalTeacherReducer } from './modal/modalBookTrialLesson/slice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
    filters: filtersReducer,
    modalAuth: modalAuthReducer,
    modalTeacher: modalTeacherReducer,
  },
});
