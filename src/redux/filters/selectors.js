export const selectLanguageOfInstruction = state =>
  state.filters?.languageOfInstruction ?? '';

export const selectStudentsLevel = state => state.filters?.studentsLevel ?? '';

export const selectPricePerHour = state => state.filters?.pricePerHour ?? '';

export const selectRating = state => state.filters?.rating ?? '';
