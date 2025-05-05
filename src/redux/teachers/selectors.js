import { createSelector } from '@reduxjs/toolkit';
import {
  selectLanguageOfInstruction,
  selectStudentsLevel,
  selectPricePerHour,
  selectRating,
} from '../filters/selectors.js';

export const selectTeachers = state => state.teachers.teachersItem;

export const selectLoading = state => state.teachers.loading;

export const selectError = state => state.teachers.error;

export const selectSelectedTeacher = state => state.teachers.selectedTeacher;

export const selectFilteredTeachers = createSelector(
  [
    selectTeachers,
    selectLanguageOfInstruction,
    selectStudentsLevel,
    selectPricePerHour,
    selectRating,
  ],
  (teachers, language, level, price, rating) => {
    return teachers
      .filter(teacher => {
        const matchLang = language
          ? teacher.languageOfInstruction === language
          : true;
        const matchLevel = level
          ? Array.isArray(teacher.studentsLevel) &&
            teacher.studentsLevel.includes(level)
          : true;
        const matchPrice = price ? teacher.pricePerHour <= Number(price) : true;

        return matchLang && matchLevel && matchPrice;
      })
      .sort((a, b) => b.rating - a.rating);
  }
);
